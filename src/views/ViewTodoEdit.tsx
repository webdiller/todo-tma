import { apiHooks, apiService, PatchApiTodosIdMutationRequest } from "@/shared/http"
import { Badge, Button, Card, Headline, IconButton, Input, Spinner, Spoiler, Title, Switch, Cell } from "@telegram-apps/telegram-ui"
import { Check, ChevronLeft, Edit, Plus, Trash, X } from "lucide-react"
import { useSignal } from "@telegram-apps/sdk-react"
import { useNavigate } from "@tanstack/react-router"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Typography from "@tiptap/extension-typography"
import Highlight from "@tiptap/extension-highlight"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { generateDate } from "@/shared/helpers/generateDate"
type DateOptions = "30_minutes" | "2_hours" | "1_day" | "3_days" | "1_week" | "2_weeks" | "1_month" | "2_months" | "6_months" | "1_year"

type Props = {
  todoId: string
}

type UpdateTodo = PatchApiTodosIdMutationRequest
type ReferenceProps = {
  id: string
  value: UpdateTodo["referencesToTheSource"][number]
}

export const ViewTodoEdit = ({ todoId }: Props) => {
  // Core
  const useNavigateAPI = useNavigate()

  // API
  const useGetApiTodosIdAPI = apiHooks.todosHooks.useGetApiTodosId(todoId)
  const useDeleteApiTodosIdAPI = apiHooks.todosHooks.useDeleteApiTodosId("")
  const usePatchApiTodosId = apiHooks.todosHooks.usePatchApiTodosId(todoId)
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      enabled: useDeleteApiTodosIdAPI.isSuccess || usePatchApiTodosId.isSuccess,
    },
  })

  // State
  const [preview, setPreview] = useState(false)
  const [references, setReferences] = useState<ReferenceProps[]>(() => {
    if (useGetApiTodosIdAPI.data?.data?.referencesToTheSource) {
      const parsed: ReferenceProps[] = useGetApiTodosIdAPI.data?.data?.referencesToTheSource.map((item) => ({ id: item, value: item }))
      console.log("parsed: ", parsed)
      return parsed
    }
    return []
  })

  const editor = useEditor({
    extensions: [StarterKit, Highlight, Typography],
    editorProps: {
      attributes: {
        class: "prose focus:outline-none border-2 border-border focus:border-link_color_alt rounded-xl px-3 py-4",
      },
    },
    content: useGetApiTodosIdAPI.data?.data?.questionAnswer,
  })

  const useFormCreate = useForm<UpdateTodo>({
    values: {
      questionTitle: useGetApiTodosIdAPI.data?.data?.questionTitle ?? "",
      referencesToTheSource: useGetApiTodosIdAPI.data?.data?.referencesToTheSource ?? [],
      isActive: useGetApiTodosIdAPI.data?.data?.isActive ?? true,
      questionAnswer: useGetApiTodosIdAPI.data?.data?.questionAnswer ?? "",
      repeat: useGetApiTodosIdAPI.data?.data?.repeat ?? [],
    },
  })

  const watchIsActive = useFormCreate.watch("isActive")

  // Actions
  const onCheck = () => useFormCreate.setValue("isActive", !watchIsActive)

  const togglePreview = () => setPreview((prev) => !prev)

  const onAddReference = () => {
    const id = Date.now()
    setReferences([...references, { id: id.toString(), value: "" }])
  }

  const onDeleteReference = (id: string) => {
    setReferences(references.filter((reference) => reference.id !== id))
  }

  const onSubmit = async (data: UpdateTodo) => {
    const parsedReferences = references.map((reference) => reference.value)
    const answer = editor?.getHTML() ?? ""

    try {
      const { data: response } = await usePatchApiTodosId.mutateAsync({
        questionTitle: data.questionTitle,
        questionAnswer: answer,
        referencesToTheSource: parsedReferences,
        repeat: data.repeat,
        isActive: watchIsActive,
      })
      useGetApiTodosAPI.refetch()
      useGetApiTodosIdAPI.refetch()
      useNavigateAPI({
        to: "/profile/todos/$todoId",
        params: {
          todoId: response.id.toString(),
        },
      })
    } catch (error) {}
  }

  useEffect(() => {
    useFormCreate.setFocus("questionTitle")
  }, [])

  return (
    <div className="container">
      {!useGetApiTodosIdAPI.data?.data ? (
        <div className="flex items-center justify-center">
          <Spinner size="l" />
        </div>
      ) : (
        <div className="space-y-2">
          <div onClick={() => useNavigateAPI({ to: "/profile/todos" })}>
            <IconButton
              size="s"
              className="mr-2">
              <ChevronLeft />
            </IconButton>
            <Headline
              className="inline align-super"
              weight="3">
              {useGetApiTodosIdAPI.data?.data?.questionTitle}
            </Headline>
          </div>
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

              <div className="space-y-1">
                <Cell
                  Component="label"
                  after={
                    <Switch
                      checked={watchIsActive}
                      onChange={onCheck}
                    />
                  }
                  description="Is active question?"
                  multiline>
                  Is Active
                </Cell>
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
      )}
    </div>
  )
}
