/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as UiKitImport } from './routes/ui-kit'
import { Route as IndexImport } from './routes/index'
import { Route as ProfileIndexImport } from './routes/profile/index'
import { Route as ProfileTodosIndexImport } from './routes/profile/todos/index'
import { Route as ProfileTodosRecentIndexImport } from './routes/profile/todos/recent/index'
import { Route as ProfileTodosCreateIndexImport } from './routes/profile/todos/create/index'
import { Route as ProfileTodosTodoIdIndexImport } from './routes/profile/todos/$todoId/index'
import { Route as ProfileTodosTodoIdEditIndexImport } from './routes/profile/todos/$todoId/edit/index'

// Create/Update Routes

const UiKitRoute = UiKitImport.update({
  path: '/ui-kit',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileTodosIndexRoute = ProfileTodosIndexImport.update({
  path: '/profile/todos/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileTodosRecentIndexRoute = ProfileTodosRecentIndexImport.update({
  path: '/profile/todos/recent/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileTodosCreateIndexRoute = ProfileTodosCreateIndexImport.update({
  path: '/profile/todos/create/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileTodosTodoIdIndexRoute = ProfileTodosTodoIdIndexImport.update({
  path: '/profile/todos/$todoId/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileTodosTodoIdEditIndexRoute =
  ProfileTodosTodoIdEditIndexImport.update({
    path: '/profile/todos/$todoId/edit/',
    getParentRoute: () => rootRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/ui-kit': {
      id: '/ui-kit'
      path: '/ui-kit'
      fullPath: '/ui-kit'
      preLoaderRoute: typeof UiKitImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/todos/': {
      id: '/profile/todos/'
      path: '/profile/todos'
      fullPath: '/profile/todos'
      preLoaderRoute: typeof ProfileTodosIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/todos/$todoId/': {
      id: '/profile/todos/$todoId/'
      path: '/profile/todos/$todoId'
      fullPath: '/profile/todos/$todoId'
      preLoaderRoute: typeof ProfileTodosTodoIdIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/todos/create/': {
      id: '/profile/todos/create/'
      path: '/profile/todos/create'
      fullPath: '/profile/todos/create'
      preLoaderRoute: typeof ProfileTodosCreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/todos/recent/': {
      id: '/profile/todos/recent/'
      path: '/profile/todos/recent'
      fullPath: '/profile/todos/recent'
      preLoaderRoute: typeof ProfileTodosRecentIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/todos/$todoId/edit/': {
      id: '/profile/todos/$todoId/edit/'
      path: '/profile/todos/$todoId/edit'
      fullPath: '/profile/todos/$todoId/edit'
      preLoaderRoute: typeof ProfileTodosTodoIdEditIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/ui-kit': typeof UiKitRoute
  '/profile': typeof ProfileIndexRoute
  '/profile/todos': typeof ProfileTodosIndexRoute
  '/profile/todos/$todoId': typeof ProfileTodosTodoIdIndexRoute
  '/profile/todos/create': typeof ProfileTodosCreateIndexRoute
  '/profile/todos/recent': typeof ProfileTodosRecentIndexRoute
  '/profile/todos/$todoId/edit': typeof ProfileTodosTodoIdEditIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/ui-kit': typeof UiKitRoute
  '/profile': typeof ProfileIndexRoute
  '/profile/todos': typeof ProfileTodosIndexRoute
  '/profile/todos/$todoId': typeof ProfileTodosTodoIdIndexRoute
  '/profile/todos/create': typeof ProfileTodosCreateIndexRoute
  '/profile/todos/recent': typeof ProfileTodosRecentIndexRoute
  '/profile/todos/$todoId/edit': typeof ProfileTodosTodoIdEditIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/ui-kit': typeof UiKitRoute
  '/profile/': typeof ProfileIndexRoute
  '/profile/todos/': typeof ProfileTodosIndexRoute
  '/profile/todos/$todoId/': typeof ProfileTodosTodoIdIndexRoute
  '/profile/todos/create/': typeof ProfileTodosCreateIndexRoute
  '/profile/todos/recent/': typeof ProfileTodosRecentIndexRoute
  '/profile/todos/$todoId/edit/': typeof ProfileTodosTodoIdEditIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/ui-kit'
    | '/profile'
    | '/profile/todos'
    | '/profile/todos/$todoId'
    | '/profile/todos/create'
    | '/profile/todos/recent'
    | '/profile/todos/$todoId/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/ui-kit'
    | '/profile'
    | '/profile/todos'
    | '/profile/todos/$todoId'
    | '/profile/todos/create'
    | '/profile/todos/recent'
    | '/profile/todos/$todoId/edit'
  id:
    | '__root__'
    | '/'
    | '/ui-kit'
    | '/profile/'
    | '/profile/todos/'
    | '/profile/todos/$todoId/'
    | '/profile/todos/create/'
    | '/profile/todos/recent/'
    | '/profile/todos/$todoId/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  UiKitRoute: typeof UiKitRoute
  ProfileIndexRoute: typeof ProfileIndexRoute
  ProfileTodosIndexRoute: typeof ProfileTodosIndexRoute
  ProfileTodosTodoIdIndexRoute: typeof ProfileTodosTodoIdIndexRoute
  ProfileTodosCreateIndexRoute: typeof ProfileTodosCreateIndexRoute
  ProfileTodosRecentIndexRoute: typeof ProfileTodosRecentIndexRoute
  ProfileTodosTodoIdEditIndexRoute: typeof ProfileTodosTodoIdEditIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  UiKitRoute: UiKitRoute,
  ProfileIndexRoute: ProfileIndexRoute,
  ProfileTodosIndexRoute: ProfileTodosIndexRoute,
  ProfileTodosTodoIdIndexRoute: ProfileTodosTodoIdIndexRoute,
  ProfileTodosCreateIndexRoute: ProfileTodosCreateIndexRoute,
  ProfileTodosRecentIndexRoute: ProfileTodosRecentIndexRoute,
  ProfileTodosTodoIdEditIndexRoute: ProfileTodosTodoIdEditIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/ui-kit",
        "/profile/",
        "/profile/todos/",
        "/profile/todos/$todoId/",
        "/profile/todos/create/",
        "/profile/todos/recent/",
        "/profile/todos/$todoId/edit/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/ui-kit": {
      "filePath": "ui-kit.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.tsx"
    },
    "/profile/todos/": {
      "filePath": "profile/todos/index.tsx"
    },
    "/profile/todos/$todoId/": {
      "filePath": "profile/todos/$todoId/index.tsx"
    },
    "/profile/todos/create/": {
      "filePath": "profile/todos/create/index.tsx"
    },
    "/profile/todos/recent/": {
      "filePath": "profile/todos/recent/index.tsx"
    },
    "/profile/todos/$todoId/edit/": {
      "filePath": "profile/todos/$todoId/edit/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
