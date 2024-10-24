import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { GetApiTodosQueryResponse } from "../../../types/todosController/GetApiTodos";

 /**
 * @description Get all todos
 * @link /api/todos/
 */
export async function getApiTodos(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetApiTodosQueryResponse>> {
    const res = await client<GetApiTodosQueryResponse>({ method: "get", url: `/api/todos/`, ...options });
    return res;
}