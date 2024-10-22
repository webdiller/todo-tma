import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card } from "@telegram-apps/telegram-ui"
import { useEffect } from "react"
export const ViewRecentTodos = () => {
  const initDataUser = useSignal(initData.user)
  const initDataHash = useSignal(initData.hash)
  return <div className="container">ViewRecentTodos</div>
}
