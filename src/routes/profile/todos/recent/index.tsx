import { ViewRecentTodos } from "@/views/ViewRecentTodos"
import { ViewTodos } from "@/views/ViewTodos"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/profile/todos/recent/")({
  // component: () => <ViewRecentTodos />,
  component: () => <ViewTodos />,
})
