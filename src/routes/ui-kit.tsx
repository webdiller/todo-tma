import { ViewUI } from "@/views/ViewUI"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/ui-kit")({
  component: () => <ViewUI />,
})
