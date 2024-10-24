import { Link, useLocation } from "@tanstack/react-router"
import { Button } from "@telegram-apps/telegram-ui"
import clsx from "clsx"
import { Plus, User } from "lucide-react"

type Props = {}

export const TapBar = () => {
  const useLocationAPI = useLocation()
  return (
    <div className="fixed bottom-2 right-2 flex flex-col space-y-2">
      <Button
        className={clsx(" h-auto w-auto min-w-0 rounded-full p-2 transition-all duration-300", {
          // "pointer-events-none translate-y-2 opacity-0": useLocationAPI.pathname === "/profile/todos/create",
        })}>
        <Link
          to="/profile/todos/create"
          className="relative h-full w-full">
          <Plus />
        </Link>
      </Button>
      <Button
        className={clsx(" h-auto w-auto min-w-0 rounded-full p-2 transition-all duration-300", {
          // "pointer-events-none translate-y-2 opacity-0": useLocationAPI.pathname === "/profile",
        })}>
        <Link
          to="/profile"
          className="relative h-full w-full">
          <User />
        </Link>
      </Button>
    </div>
  )
}
