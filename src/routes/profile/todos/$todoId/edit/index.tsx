import { ViewTodoEdit } from "@/views/ViewTodoEdit"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/profile/todos/$todoId/edit/")({
  component: ViewComponent,
})

function ViewComponent() {
  const { todoId } = Route.useParams()
  return <ViewTodoEdit todoId={todoId} />
}
