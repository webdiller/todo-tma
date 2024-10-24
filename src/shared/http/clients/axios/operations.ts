export const operations = {
    "get_": {
        "path": "/",
        "method": "get"
    },
    "get_api-todos": {
        "path": "/api/todos/",
        "method": "get"
    },
    "post_api-todos": {
        "path": "/api/todos/",
        "method": "post"
    },
    "get_api-todos-id": {
        "path": "/api/todos/:id",
        "method": "get"
    },
    "delete_api-todos-id": {
        "path": "/api/todos/:id",
        "method": "delete"
    },
    "patch_api-todos-id": {
        "path": "/api/todos/:id",
        "method": "patch"
    },
    "post_api-auth-sign-in-by-telegram": {
        "path": "/api/auth/sign-in-by-telegram",
        "method": "post"
    },
    "get_api-users": {
        "path": "/api/users/",
        "method": "get"
    },
    "patch_api-users": {
        "path": "/api/users/",
        "method": "patch"
    }
} as const;