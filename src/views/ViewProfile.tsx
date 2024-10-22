import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card } from "@telegram-apps/telegram-ui"
import axios from "axios"
import { useEffect } from "react"
export const ViewProfile = () => {
  const initDataRaw = useSignal(initData.raw)
  const initDataUser = useSignal(initData.user)
  const initDataHash = useSignal(initData.hash)
  const initDataState = useSignal(initData.state)
  return (
    <div className="container">
      <div>{JSON.stringify(initDataState, undefined, 2)}</div>
      <div>initDataRaw</div>
      <div>
        <p>User Name: {initDataUser?.username}</p>
        <p>User ID: {initDataUser?.id}</p>
        <p>First Name: {initDataUser?.firstName}</p>
        <p>Last Name: {initDataUser?.lastName}</p>
        <p>allowsWriteToPm: {JSON.stringify(initDataUser?.allowsWriteToPm)}</p>
        <p>isPremium: {JSON.stringify(initDataUser?.isPremium)}</p>
        <p>languageCode: {initDataUser?.languageCode}</p>
        <p>Is Bot: {initDataUser?.isBot ? "Yes" : "No"}</p>
      </div>
    </div>
  )
}
