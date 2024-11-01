import { apiHooks, apiService } from "@/shared/http"
import { useMutation } from "@tanstack/react-query"
import { Link, useNavigate } from "@tanstack/react-router"
import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card, Headline, Spoiler, Title } from "@telegram-apps/telegram-ui"
import { Edit, Trash } from "lucide-react"
import { useEffect, useState } from "react"
export const ViewTodos = () => {
  // const initDataUser = useSignal(initData.user)
  // const initDataHash = useSignal(initData.hash)

  // Core
  const useNavigateAPI = useNavigate()

  // State
  const [selectedToDelete, setSelectedToDelete] = useState<string>("")

  // API
  const useDeleteApiTodosIdAPI = apiHooks.todosHooks.useDeleteApiTodosId(selectedToDelete)
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      refetchInterval: 5000,
    },
  })

  // Actions
  const onDelete = (id: string) => async () => {
    try {
      const cond = confirm("Are you sure you want to delete this todo?")
      if (!cond) return
      setSelectedToDelete(id)
      await useDeleteApiTodosIdAPI.mutateAsync(selectedToDelete as never)
      await useGetApiTodosAPI.refetch()
    } catch (e) {
      console.log(e)
    } finally {
      setSelectedToDelete("")
    }
  }

  return (
    <div className="container">
      <div className="space-y-2">
        {useGetApiTodosAPI.data?.data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-slate-50 px-2 break-all py-4 rounded-xl">
              <div className="space-y-2">
                <Headline weight="3">{item.questionTitle}</Headline>
                {/* <Spoiler className="bg-slate-50 prose">
                  <div dangerouslySetInnerHTML={{ __html: item.questionAnswer }} />
                </Spoiler> */}
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    className="relative"
                    mode="filled"
                    size="s"
                    before={<Edit className="size-4" />}>
                    <Link
                      className="absolute inset-0 w-full h-full"
                      to={`/profile/todos/$todoId`}
                      params={{ todoId: `${item.id}` }}
                    />
                    More info
                  </Button>
                  <Button
                    className="relative"
                    mode="filled"
                    size="s"
                    before={<Edit className="size-4" />}>
                    <Link
                      className="absolute inset-0 w-full h-full"
                      to={`/profile/todos/$todoId/edit`}
                      params={{ todoId: `${item.id}` }}
                    />
                    Edit
                  </Button>
                  <Button
                    onClick={onDelete(`${item.id}`)}
                    className="bg-destructive_text_color"
                    mode="filled"
                    size="s"
                    before={<Trash className="size-4" />}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
