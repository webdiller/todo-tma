import { zodGetQueryResponseSchema } from "./zodGetSchema";
import { zodGetApiTodosQueryResponseSchema } from "./todosController/zodGetApiTodosSchema";
import { zodPostApiTodosMutationRequestSchema, zodPostApiTodosMutationResponseSchema } from "./todosController/zodPostApiTodosSchema";
import { zodGetApiTodosIdQueryResponseSchema, zodGetApiTodosIdPathParamsSchema } from "./todosController/zodGetApiTodosIdSchema";
import { zodDeleteApiTodosIdMutationResponseSchema, zodDeleteApiTodosIdPathParamsSchema } from "./todosController/zodDeleteApiTodosIdSchema";
import { zodPatchApiTodosIdMutationRequestSchema, zodPatchApiTodosIdMutationResponseSchema, zodPatchApiTodosIdPathParamsSchema } from "./todosController/zodPatchApiTodosIdSchema";
import { zodPostApiAuthSignInByTelegramMutationRequestSchema, zodPostApiAuthSignInByTelegramMutationResponseSchema } from "./authController/zodPostApiAuthSignInByTelegramSchema";
import { zodGetApiUsersQueryResponseSchema } from "./userController/zodGetApiUsersSchema";
import { zodPatchApiUsersMutationRequestSchema, zodPatchApiUsersMutationResponseSchema } from "./userController/zodPatchApiUsersSchema";

 export const operations = { "get_": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodGetQueryResponseSchema,
            default: zodGetQueryResponseSchema
        },
        errors: {}
    }, "get_api-todos": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodGetApiTodosQueryResponseSchema,
            default: zodGetApiTodosQueryResponseSchema
        },
        errors: {}
    }, "post_api-todos": {
        request: zodPostApiTodosMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodPostApiTodosMutationResponseSchema,
            default: zodPostApiTodosMutationResponseSchema
        },
        errors: {}
    }, "get_api-todos-id": {
        request: undefined,
        parameters: {
            path: zodGetApiTodosIdPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodGetApiTodosIdQueryResponseSchema,
            default: zodGetApiTodosIdQueryResponseSchema
        },
        errors: {}
    }, "delete_api-todos-id": {
        request: undefined,
        parameters: {
            path: zodDeleteApiTodosIdPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodDeleteApiTodosIdMutationResponseSchema,
            default: zodDeleteApiTodosIdMutationResponseSchema
        },
        errors: {}
    }, "patch_api-todos-id": {
        request: zodPatchApiTodosIdMutationRequestSchema,
        parameters: {
            path: zodPatchApiTodosIdPathParamsSchema,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodPatchApiTodosIdMutationResponseSchema,
            default: zodPatchApiTodosIdMutationResponseSchema
        },
        errors: {}
    }, "post_api-auth-sign-in-by-telegram": {
        request: zodPostApiAuthSignInByTelegramMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodPostApiAuthSignInByTelegramMutationResponseSchema,
            default: zodPostApiAuthSignInByTelegramMutationResponseSchema
        },
        errors: {}
    }, "get_api-users": {
        request: undefined,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodGetApiUsersQueryResponseSchema,
            default: zodGetApiUsersQueryResponseSchema
        },
        errors: {}
    }, "patch_api-users": {
        request: zodPatchApiUsersMutationRequestSchema,
        parameters: {
            path: undefined,
            query: undefined,
            header: undefined
        },
        responses: {
            200: zodPatchApiUsersMutationResponseSchema,
            default: zodPatchApiUsersMutationResponseSchema
        },
        errors: {}
    } } as const;
export const paths = { "/": {
        get: operations["get_"]
    }, "/api/todos/": {
        get: operations["get_api-todos"],
        post: operations["post_api-todos"]
    }, "/api/todos/{id}": {
        get: operations["get_api-todos-id"],
        delete: operations["delete_api-todos-id"],
        patch: operations["patch_api-todos-id"]
    }, "/api/auth/sign-in-by-telegram": {
        post: operations["post_api-auth-sign-in-by-telegram"]
    }, "/api/users/": {
        get: operations["get_api-users"],
        patch: operations["patch_api-users"]
    } } as const;