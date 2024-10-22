import { Link, useLocation } from "@tanstack/react-router"
import { initData, useSignal } from "@telegram-apps/sdk-react"
import { Avatar, Tabbar, TabsList, Tappable, Switch, Multiselect, Modal, Spoiler, Button } from "@telegram-apps/telegram-ui"
import { useState } from "react"
export const PublicHeader = () => {
  const [isCheched, setIsCheched] = useState(false)
  const useLocationAPI = useLocation()
  const initDataUser = useSignal(initData.user)
  return (
    <div>
      {/* APP BAR */}
      <div className="container flex items-center justify-between py-2">
        <Link
          to="/"
          className="inline-flex h-10 w-32 items-center justify-center rounded-xl bg-slate-100">
          Loop It
        </Link>
        <Avatar className="relative overflow-hidden uppercase">
          <Link
            className="absolute inset-0 h-full w-full"
            to="/profile"></Link>
          <span>{initDataUser?.username?.slice(0, 2)}</span>
        </Avatar>
      </div>
      <hr className="h-px bg-slate-100" />
      {/* TABS */}
      <TabsList className="container justify-center py-2">
        <Button
          mode={useLocationAPI.pathname !== "/profile/todos" ? "outline" : "filled"}
          className="relative h-9 flex-1">
          <Link
            className="absolute inset-0 flex items-center justify-center"
            to="/profile/todos">
            All Todos
          </Link>
        </Button>
        <Button
          mode={useLocationAPI.pathname !== "/profile/todos/recent" ? "outline" : "filled"}
          className="relative h-9 flex-1">
          <Link
            className="absolute inset-0 flex items-center justify-center"
            to="/profile/todos/recent">
            Recent Todos
          </Link>
        </Button>
      </TabsList>
    </div>
  )
}
