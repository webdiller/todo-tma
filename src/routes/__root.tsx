import { createRootRoute, Outlet } from "@tanstack/react-router"
import { PublicHeader } from "../widgets/PublicHeader/ui"
import { hideSplashScreen } from "vite-plugin-splash-screen/runtime"
import { AppRoot, Placeholder, Badge, Button } from "@telegram-apps/telegram-ui"
import { Plus } from "lucide-react"
import { TapBar } from "@/widgets/TapBar/ui"
export const Route = createRootRoute({
  component: () => (
    <AppRoot>
      <PublicHeader />
      <Outlet />
      <TapBar />
    </AppRoot>
  ),
  beforeLoad: async (_ctx) => {
    hideSplashScreen()
  },
})
