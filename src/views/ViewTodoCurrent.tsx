import { apiHooks, apiService } from "@/shared/http"
import { Badge, Button, Card, Headline, IconButton, Spinner, Spoiler, Title } from "@telegram-apps/telegram-ui"
import { ChevronLeft, Edit, Trash } from "lucide-react"
import { miniApp, backButton } from "@telegram-apps/sdk"
import { useSignal } from "@telegram-apps/sdk-react"
import { useNavigate } from "@tanstack/react-router"

type Props = {
  todoId: string
}

export const ViewTodoCurrent = ({ todoId }: Props) => {
  // Core
  const useNavigateAPI = useNavigate()
  // const isMounted = useSignal(backButton.isMounted)
  // const isVisible = useSignal(backButton.isVisible)
  // const isSupported = useSignal(backButton.isSupported)

  // API
  const useGetApiTodosIdAPI = apiHooks.todosHooks.useGetApiTodosId(todoId)
  const useDeleteApiTodosIdAPI = apiHooks.todosHooks.useDeleteApiTodosId("")
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      enabled: useDeleteApiTodosIdAPI.isSuccess,
    },
  })

  const onDelete = (id: string) => async () => {
    try {
      const cond = confirm("Are you sure you want to delete this todo?")
      if (!cond) return
      await useDeleteApiTodosIdAPI.mutateAsync(id as never)
      await useGetApiTodosAPI.refetch()
      useNavigateAPI({ to: "/profile/todos" })
    } catch (error) {}
  }

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
          <div className="bg-slate-50 px-2 break-all py-4 rounded-xl">
            <div className="space-y-2">
              <div
                className="bg-slate-50 prose break-words text-balance"
                dangerouslySetInnerHTML={{ __html: useGetApiTodosIdAPI.data?.data?.questionAnswer }}
              />
              <div className="flex items-center justify-end space-x-2">
                <Button
                  onClick={() => useNavigateAPI({ to: "/profile/todos/$todoId/edit", params: { todoId: todoId } })}
                  mode="filled"
                  size="s"
                  before={<Edit className="size-4" />}>
                  Edit
                </Button>
                <Button
                  onClick={onDelete(todoId)}
                  className="bg-destructive_text_color"
                  mode="filled"
                  size="s"
                  before={<Trash className="size-4" />}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
