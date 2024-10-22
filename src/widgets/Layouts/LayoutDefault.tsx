import { Outlet } from "@tanstack/react-router"
import { PublicHeader } from "../PublicHeader/ui"

export const LayoutDefault = () => (
  <div>
    <PublicHeader />
    <main>
      <Outlet />
    </main>
  </div>
)

