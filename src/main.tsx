import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createRouter } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
// Import the generated route tree
import { routeTree } from "./routeTree.gen"
import TanstackProvider from "./shared/utils/providers/tanstack-provider"
//global styles
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./index.css"
import { init } from "./shared/libs/init"
import { retrieveLaunchParams } from "@telegram-apps/sdk"
// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  const isDevMode = process.env.NODE_ENV === "development" ? true : false
  const root = ReactDOM.createRoot(rootElement)
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);
  root.render(
    <StrictMode>
      <TanstackProvider>
        <RouterProvider router={router} />
        {!isDevMode && <TanStackRouterDevtools />}
      </TanstackProvider>
    </StrictMode>,
  )
}
