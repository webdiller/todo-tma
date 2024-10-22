import { ViewRecentTodos } from "@/views/ViewRecentTodos"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/profile/todos/recent/")({
  component: () => <ViewRecentTodos />,
})
