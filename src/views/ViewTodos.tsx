import { apiHooks, apiService } from "@/shared/http"
import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card, Headline, Spoiler, Title } from "@telegram-apps/telegram-ui"
import { Edit, Trash } from "lucide-react"
import { useEffect } from "react"
export const ViewTodos = () => {
  // const initDataUser = useSignal(initData.user)
  // const initDataHash = useSignal(initData.hash)
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({
    query: {
      refetchInterval: 5000,
    },
  })

  const onDelete = (id: string) => async () => {
    try {
      await apiService.todosService.deleteApiTodosId({ id })
      useGetApiTodosAPI.refetch()
    } catch (error) {}
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
                <Spoiler className="bg-slate-50">{item.questionAnswer}</Spoiler>
                <div className="flex items-center justify-end space-x-2">
                  <Button
                    mode="filled"
                    size="s"
                    before={<Edit className="size-4" />}>
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
