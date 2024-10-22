import { ViewProfile } from '@/views/ViewProfile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
  component: () => <ViewProfile />,
})
