import { ViewTodosCreate } from '@/views/ViewTodosCreate'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/todos/create/')({
  component: () => <ViewTodosCreate />,
})
