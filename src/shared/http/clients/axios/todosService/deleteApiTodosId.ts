import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { DeleteApiTodosIdMutationResponse, DeleteApiTodosIdPathParams } from "../../../types/todosController/DeleteApiTodosId";

 /**
 * @description Delete one
 * @summary Delete one
 * @link /api/todos/:id
 */
export async function deleteApiTodosId({ id }: {
    id: DeleteApiTodosIdPathParams["id"];
}, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<DeleteApiTodosIdMutationResponse>> {
    const res = await client<DeleteApiTodosIdMutationResponse>({ method: "delete", url: `/api/todos/${id}`, ...options });
    return res;
}