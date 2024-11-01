import { apiHooks, PostApiTodosMutationRequest } from "@/shared/http"
import { Button, IconButton, Input } from "@telegram-apps/telegram-ui"
import { Check, Plus, X } from "lucide-react"
import { useEffect, useState } from "react"
import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { useNavigate } from "@tanstack/react-router"
import { DateOptions, generateDate } from "@/shared/helpers/generateDate"

type CreateTodo = PostApiTodosMutationRequest
type ReferenceProps = {
  id: string
  value: CreateTodo["referencesToTheSource"][number]
}

export const ViewTodosCreate = () => {
  // Core
  const useNavigateAPI = useNavigate()

  // State
  const [preview, setPreview] = useState(false)
  const useFormCreate = useForm<CreateTodo>()
  const [references, setReferences] = useState<ReferenceProps[]>([])
  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    editorProps: {
      attributes: {
        class: "prose focus:outline-none border-2 border-border focus:border-link_color_alt rounded-xl px-3 py-4",
      },
    },
    content: "",
  })

  // API
  const usePostApiTodosAPI = apiHooks.todosHooks.usePostApiTodos({})
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      enabled: usePostApiTodosAPI.isSuccess,
    },
  })

  // Actions
  const togglePreview = () => setPreview((prev) => !prev)

  const onAddReference = () => {
    const id = Date.now()
    setReferences([...references, { id: id.toString(), value: "" }])
  }

  const onDeleteReference = (id: string) => {
    setReferences(references.filter((reference) => reference.id !== id))
  }

  useEffect(() => {
    useFormCreate.setFocus("questionTitle")
  }, [])

  const onSubmit = async (data: CreateTodo) => {
    const dateOptions: DateOptions[] = ["30_minutes", "2_hours", "1_day", "3_days", "1_week", "2_weeks", "1_month", "2_months", "6_months", "1_year"]
    const dates = dateOptions.map((option) => format(generateDate(option), "yyyy-MM-dd'T'HH:mm:ss"))
    const parsedReferences = references.map((reference) => reference.value)
    const answer = editor?.getHTML() ?? ""

    if (!data.questionTitle.length || !answer.length) return

    try {
      const { data: response } = await usePostApiTodosAPI.mutateAsync({
        questionTitle: data.questionTitle,
        questionAnswer: answer,
        repeat: dates,
        referencesToTheSource: parsedReferences,
      })
      useGetApiTodosAPI.refetch()
      useNavigateAPI({
        to: "/profile/todos/$todoId",
        params: {
          todoId: response.id.toString(),
        },
      })
    } catch (error) {}
  }

  return (
    <div className="container space-y-4 pb-2 flex-1 flex flex-col">
      <h1 className="text-2xl font-bold">Create Todo</h1>
      <form
        autoComplete="off"
        onSubmit={useFormCreate.handleSubmit(onSubmit)}
        className="flex-1 flex flex-col">
        {/* Fields */}
        <div className="space-y-4 mb-auto">
          <div className="space-y-1">
            <label className="text-stone-700">Question</label>
            <div className="*:p-0">
              <Input {...useFormCreate.register("questionTitle")} />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex w-full items-center justify-between">
              <label className="text-stone-700">Answer (Markdown support)</label>
              <button
                type="button"
                onClick={togglePreview}>
                Preview
              </button>
            </div>
            <div className="*:p-0">
              {!preview ? (
                <EditorContent
                  placeholder="Answer"
                  editor={editor}
                />
              ) : (
                <div
                  className="prose !px-4 !py-3 border rounded-xl bg-slate-50"
                  dangerouslySetInnerHTML={{ __html: editor?.getHTML() ?? "" }}
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="space-y-1">
              <label className="text-stone-700">URL References</label>
              <div className="space-y-2">
                {references.map((item) => {
                  return (
                    <div
                      className="flex items-center space-x-2"
                      key={item.id}>
                      <div className="*:p-0 flex-1">
                        <Input
                          value={item.value}
                          onChange={(e) =>
                            setReferences(
                              references.map((reference) => (reference.id === item.id ? { ...reference, value: e.target.value } : reference)),
                            )
                          }
                        />
                      </div>
                      <IconButton
                        size="l"
                        mode="gray"
                        onClick={() => onDeleteReference(item.id)}
                        className="bg-destructive_text_color">
                        <X className="text-white size-4" />
                      </IconButton>
                    </div>
                  )
                })}
              </div>
            </div>
            <Button
              mode="bezeled"
              after={<Plus className="size-4" />}
              onClick={onAddReference}>
              Add reference
            </Button>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex *:flex-1 items-center mt-4 justify-end space-x-2">
          <Button
            className="bg-red-500"
            after={<X className="size-4" />}
            type="reset">
            Reset
          </Button>
          <Button
            after={<Check className="size-4" />}
            type="submit">
            Save
          </Button>
        </div>
      </form>
    </div>
  )
}
