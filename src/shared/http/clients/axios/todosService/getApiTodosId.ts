import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { GetApiTodosIdQueryResponse, GetApiTodosIdPathParams } from "../../../types/todosController/GetApiTodosId";

 /**
 * @description Get one
 * @summary Get one
 * @link /api/todos/:id
 */
export async function getApiTodosId({ id }: {
    id: GetApiTodosIdPathParams["id"];
}, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetApiTodosIdQueryResponse>> {
    const res = await client<GetApiTodosIdQueryResponse>({ method: "get", url: `/api/todos/${id}`, ...options });
    return res;
}