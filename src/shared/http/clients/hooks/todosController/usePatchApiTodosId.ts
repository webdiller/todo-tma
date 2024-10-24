import client from "@/shared/utils/kubb-clients/axios-client";
import { useMutation } from "@tanstack/react-query";
import type { PatchApiTodosIdMutationRequest, PatchApiTodosIdMutationResponse, PatchApiTodosIdPathParams } from "../../../types/todosController/PatchApiTodosId";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PatchApiTodosIdClient = typeof client<PatchApiTodosIdMutationResponse, Error, PatchApiTodosIdMutationRequest>;
type PatchApiTodosId = {
    data: PatchApiTodosIdMutationResponse;
    error: Error;
    request: PatchApiTodosIdMutationRequest;
    pathParams: PatchApiTodosIdPathParams;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<PatchApiTodosIdClient>>;
    client: {
        parameters: Partial<Parameters<PatchApiTodosIdClient>[0]>;
        return: Awaited<ReturnType<PatchApiTodosIdClient>>;
    };
};
/**
 * @description Update one
 * @summary Update one
 * @link /api/todos/:id
 */
export function usePatchApiTodosId(id: PatchApiTodosIdPathParams["id"], options: {
    mutation?: UseMutationOptions<PatchApiTodosId["response"], PatchApiTodosId["error"], PatchApiTodosId["request"]>;
    client?: PatchApiTodosId["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PatchApiTodosId["data"], PatchApiTodosId["error"], PatchApiTodosId["request"]>({
                method: "patch",
                url: `/api/todos/${id}`,
                data,
                ...clientOptions
            });
            return res;
        },
        ...mutationOptions
    });
}