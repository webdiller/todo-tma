import { Link } from "@tanstack/react-router"
import { initData, useSignal } from "@telegram-apps/sdk-react"
import { Avatar, Tabbar, TabsList, Tappable, Switch, Multiselect, Modal, Spoiler } from "@telegram-apps/telegram-ui"
import { useState } from "react"

export const PublicHeader = () => {
  const [isCheched, setIsCheched] = useState(false)
  const initDataUser = useSignal(initData.user)
  return (
    <div>
      {/* APP BAR */}
      <div className="container flex items-center justify-between py-2">
        <Link
          to="/"
          className="h-10 w-32 rounded-xl bg-slate-100"></Link>
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
        <Link
          to="/profile/todos"
          className="flex-1 rounded-xl bg-slate-100 px-4 text-center leading-10">
          All Todos
        </Link>
        <Link
          to="/profile/todos/recent"
          className="flex-1 rounded-xl bg-slate-100 px-4 text-center leading-10">
          Recent Todos
        </Link>
      </TabsList>
    </div>
  )
}
