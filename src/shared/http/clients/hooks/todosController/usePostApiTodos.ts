import client from "@/shared/utils/kubb-clients/axios-client";
import { useMutation } from "@tanstack/react-query";
import type { PostApiTodosMutationRequest, PostApiTodosMutationResponse } from "../../../types/todosController/PostApiTodos";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostApiTodosClient = typeof client<PostApiTodosMutationResponse, Error, PostApiTodosMutationRequest>;
type PostApiTodos = {
    data: PostApiTodosMutationResponse;
    error: Error;
    request: PostApiTodosMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<PostApiTodosClient>>;
    client: {
        parameters: Partial<Parameters<PostApiTodosClient>[0]>;
        return: Awaited<ReturnType<PostApiTodosClient>>;
    };
};
/**
 * @description Create one
 * @summary Create one
 * @link /api/todos/
 */
export function usePostApiTodos(options: {
    mutation?: UseMutationOptions<PostApiTodos["response"], PostApiTodos["error"], PostApiTodos["request"]>;
    client?: PostApiTodos["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostApiTodos["data"], PostApiTodos["error"], PostApiTodos["request"]>({
                method: "post",
                url: `/api/todos/`,
                data,
                ...clientOptions
            });
            return res;
        },
        ...mutationOptions
    });
}