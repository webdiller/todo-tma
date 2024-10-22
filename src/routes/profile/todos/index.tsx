import { ViewTodos } from "@/views/ViewTodos"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/profile/todos/")({
  component: () => <ViewTodos />,
})
