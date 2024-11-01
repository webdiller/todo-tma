import { ViewTodoCurrent } from "@/views/ViewTodoCurrent"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/profile/todos/$todoId/")({
    component: ViewComponent,
})

function ViewComponent() {
  const { todoId } = Route.useParams()
  return <ViewTodoCurrent todoId={todoId} />
}
