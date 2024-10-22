import { Link, useLocation } from "@tanstack/react-router"
import { Button } from "@telegram-apps/telegram-ui"
import clsx from "clsx"
import { Plus } from "lucide-react"

type Props = {}

export const TapBar = () => {
  const useLocationAPI = useLocation()
  return (
    <>
      <Button
        className={clsx("fixed bottom-2 right-2 h-auto w-auto min-w-0 rounded-full p-2 transition-all duration-300", {
          "pointer-events-none translate-y-2 opacity-0": useLocationAPI.pathname === "/profile/todos/create",
        })}>
        <Link
          to="/profile/todos/create"
          className="relative h-full w-full">
          <Plus />
        </Link>
      </Button>
    </>
  )
}
