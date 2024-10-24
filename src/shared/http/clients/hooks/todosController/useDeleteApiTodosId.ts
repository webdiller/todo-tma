import client from "@/shared/utils/kubb-clients/axios-client";
import { useMutation } from "@tanstack/react-query";
import type { DeleteApiTodosIdMutationResponse, DeleteApiTodosIdPathParams } from "../../../types/todosController/DeleteApiTodosId";
import type { UseMutationOptions } from "@tanstack/react-query";

 type DeleteApiTodosIdClient = typeof client<DeleteApiTodosIdMutationResponse, Error, never>;
type DeleteApiTodosId = {
    data: DeleteApiTodosIdMutationResponse;
    error: Error;
    request: never;
    pathParams: DeleteApiTodosIdPathParams;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<DeleteApiTodosIdClient>>;
    client: {
        parameters: Partial<Parameters<DeleteApiTodosIdClient>[0]>;
        return: Awaited<ReturnType<DeleteApiTodosIdClient>>;
    };
};
/**
 * @description Delete one
 * @summary Delete one
 * @link /api/todos/:id
 */
export function useDeleteApiTodosId(id: DeleteApiTodosIdPathParams["id"], options: {
    mutation?: UseMutationOptions<DeleteApiTodosId["response"], DeleteApiTodosId["error"], DeleteApiTodosId["request"]>;
    client?: DeleteApiTodosId["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async () => {
            const res = await client<DeleteApiTodosId["data"], DeleteApiTodosId["error"], DeleteApiTodosId["request"]>({
                method: "delete",
                url: `/api/todos/${id}`,
                ...clientOptions
            });
            return res;
        },
        ...mutationOptions
    });
}