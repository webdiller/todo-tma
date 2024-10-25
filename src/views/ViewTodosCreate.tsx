import { apiHooks, apiService, PostApiTodosMutationRequest } from "@/shared/http"
import { Badge, Button, Input } from "@telegram-apps/telegram-ui"
import { X } from "lucide-react"
import { useEffect } from "react"
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Typography from "@tiptap/extension-typography"
import Highlight from "@tiptap/extension-highlight"
import Text from "@tiptap/extension-text"
import { EditorContent, useEditor, FloatingMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useForm } from "react-hook-form"
import { addMinutes, addHours, addDays, addWeeks, addMonths, addYears, differenceInMilliseconds, differenceInMinutes, format } from "date-fns"

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

  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    editorProps: {
      attributes: {
        class: "prose focus:outline-none border-2 border-border focus:border-link_color_alt rounded-xl px-3 py-4",
      },
    },
    content: ``,
  })

  useEffect(() => {
    useFormCreate.setFocus("questionTitle")
  }, [])

  const onSubmit = async (data: CreateTodo) => {
    const now = new Date()
    const dates = [
      format(generateDate("30_minutes"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("2_hours"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("1_day"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("3_days"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("1_week"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("2_weeks"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("1_month"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("2_months"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("6_months"), "yyyy-MM-dd'T'HH:mm:ss"),
      format(generateDate("1_year"), "yyyy-MM-dd'T'HH:mm:ss"),
    ]
    usePostApiTodosAPI.mutateAsync({
      questionTitle: data.questionTitle,
      questionAnswer: data.questionAnswer,
      repeat: dates,
      referencesToTheSource: [],
    })
  }

  return (
    <div className="container space-y-4">
      <h1 className="text-2xl font-bold">Create Todo</h1>
      <form
        autoComplete="off"
        onSubmit={useFormCreate.handleSubmit(onSubmit)}
        className="space-y-4">
        <div className="space-y-1">
          <label className="text-stone-700">Question</label>
          <div className="*:p-0">
            <Input {...useFormCreate.register("questionTitle")} />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-stone-700">Answer (Markdown support)</label>
          <div className="*:p-0">
            <EditorContent
              placeholder="Answer"
              editor={editor}
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
