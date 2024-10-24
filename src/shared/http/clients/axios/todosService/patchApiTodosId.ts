import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { PatchApiTodosIdMutationRequest, PatchApiTodosIdMutationResponse, PatchApiTodosIdPathParams } from "../../../types/todosController/PatchApiTodosId";

 /**
 * @description Update one
 * @summary Update one
 * @link /api/todos/:id
 */
export async function patchApiTodosId({ id }: {
    id: PatchApiTodosIdPathParams["id"];
}, data: PatchApiTodosIdMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PatchApiTodosIdMutationResponse>> {
    const res = await client<PatchApiTodosIdMutationResponse, PatchApiTodosIdMutationRequest>({ method: "patch", url: `/api/todos/${id}`, data, ...options });
    return res;
}