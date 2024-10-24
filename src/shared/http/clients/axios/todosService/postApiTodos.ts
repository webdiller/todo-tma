import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { PostApiTodosMutationRequest, PostApiTodosMutationResponse } from "../../../types/todosController/PostApiTodos";

 /**
 * @description Create one
 * @summary Create one
 * @link /api/todos/
 */
export async function postApiTodos(data: PostApiTodosMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostApiTodosMutationResponse>> {
    const res = await client<PostApiTodosMutationResponse, PostApiTodosMutationRequest>({ method: "post", url: `/api/todos/`, data, ...options });
    return res;
}