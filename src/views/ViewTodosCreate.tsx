import { initData, type User, useSignal, miniApp, sendData, mainButton } from "@telegram-apps/sdk-react"
import { Badge, Button, Card, Input } from "@telegram-apps/telegram-ui"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
export const ViewTodosCreate = () => {

  const useFormCreate = useForm()
  return (
    <div className="container">
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <Input placeholder="Title" />
        </div>
      </form>
    </div>
  )
}
