import { apiHooks, apiService, PostApiTodosMutationRequest } from "@/shared/http"
import { Badge, Button, Card, Input } from "@telegram-apps/telegram-ui"
import { X } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { addMinutes, addHours, addDays, addWeeks, addMonths, addYears, differenceInMilliseconds, differenceInMinutes } from "date-fns"
import { sleep } from "@/shared/helpers/sleep"
type DateOptions = "30_minutes" | "2_hours" | "1_day" | "3_days" | "1_week" | "2_weeks" | "1_month" | "2_months" | "6_months" | "1_year"
type CreateTodo = PostApiTodosMutationRequest & {}

function generateDate(option: DateOptions): Date {
  const now = new Date()
  switch (option) {
    case "30_minutes":
      return addMinutes(now, 30)
    case "2_hours":
      return addHours(now, 2)
    case "1_day":
      return addDays(now, 1)
    case "3_days":
      return addDays(now, 3)
    case "1_week":
      return addWeeks(now, 1)
    case "2_weeks":
      return addWeeks(now, 2)
    case "1_month":
      return addMonths(now, 1)
    case "2_months":
      return addMonths(now, 2)
    case "6_months":
      return addMonths(now, 6)
    case "1_year":
      return addYears(now, 1)
    default:
      throw new Error("Invalid date option")
  }
}

export const ViewTodosCreate = () => {
  const useFormCreate = useForm<CreateTodo>()
  const usePostApiTodosAPI = apiHooks.todosHooks.usePostApiTodos({})

  useEffect(() => {
    useFormCreate.setFocus("questionTitle")
  }, [])

  const onSubmit = async (data: CreateTodo) => {
    const now = new Date()
    console.log("not formated: ", now)
    console.log("formated: ", now.toDateString())
    console.log("formated: ", now.toISOString())
    console.log("formated: ", now.toJSON())
    console.log("formated: ", now.toLocaleDateString())
    console.log("formated: ", now.toLocaleTimeString())
    console.log("formated: ", now.toTimeString())
    console.log("formated: ", now.toUTCString())

    return
    // const now = new Date()
    const dates = [
      generateDate("30_minutes"),
      generateDate("2_hours"),
      generateDate("1_day"),
      generateDate("3_days"),
      generateDate("1_week"),
      generateDate("2_weeks"),
      generateDate("1_month"),
      generateDate("2_months"),
      generateDate("6_months"),
      generateDate("1_year"),
    ]
    console.log(dates)

    return
    usePostApiTodosAPI.mutateAsync({
      questionTitle: data.questionTitle,
      questionAnswer: data.questionAnswer,
      repeat: ["2024-10-25"],
    })
  }

  return (
    <div className="container space-y-4">
      <h1 className="text-2xl font-bold">Create Todo</h1>
      <form
        onSubmit={useFormCreate.handleSubmit(onSubmit)}
        className="space-y-4">
        <div className="space-y-1">
          <label className="text-stone-700">Question</label>
          <div className="*:p-0">
            <Input
              {...useFormCreate.register("questionTitle")}
              placeholder="Title"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-stone-700">Answer</label>
          <div className="*:p-0">
            <Input
              {...useFormCreate.register("questionAnswer")}
              placeholder="Answer"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 *:flex-1">
          <Button
            className="bg-red-500"
            after={<X className="size-4" />}
            type="reset">
            Reset
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  )
}
