import { apiHooks } from "@/shared/http"
import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card, Headline, Spoiler, Title } from "@telegram-apps/telegram-ui"
import { useEffect } from "react"
export const ViewRecentTodos = () => {
  // const initDataUser = useSignal(initData.user)
  // const initDataHash = useSignal(initData.hash)
  const useGetApiTodosAPI = apiHooks.todosHooks.useGetApiTodos({})
  return <div className="container">
    <div className="space-y-2">{useGetApiTodosAPI.data?.data.map((item) => {
      return <div className="bg-slate-50 px-2 break-all py-4 rounded-xl">
        <Headline weight="3">{item.questionTitle}</Headline>
        <Spoiler>{item.questionAnswer}</Spoiler>
      </div>
    })}</div>
  </div>
}
