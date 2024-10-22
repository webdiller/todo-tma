import { ViewHome } from "@/views/ViewHome"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/")({
  component: ViewHome,
})
