import { createRootRoute, Outlet } from "@tanstack/react-router"
import { PublicHeader } from "../widgets/PublicHeader/ui"
import { AppRoot, Placeholder, Badge, Button } from "@telegram-apps/telegram-ui"
import { TapBar } from "@/widgets/TapBar/ui"
export const Route = createRootRoute({
  component: () => (
    <AppRoot>
      <PublicHeader />
      <Outlet />
      {/* <TapBar /> */}
    </AppRoot>
  ),
})
