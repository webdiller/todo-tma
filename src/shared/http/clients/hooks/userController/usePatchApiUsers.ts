import client from "@/shared/utils/kubb-clients/axios-client";
import { useMutation } from "@tanstack/react-query";
import type { PatchApiUsersMutationRequest, PatchApiUsersMutationResponse } from "../../../types/userController/PatchApiUsers";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PatchApiUsersClient = typeof client<PatchApiUsersMutationResponse, Error, PatchApiUsersMutationRequest>;
type PatchApiUsers = {
    data: PatchApiUsersMutationResponse;
    error: Error;
    request: PatchApiUsersMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<PatchApiUsersClient>>;
    client: {
        parameters: Partial<Parameters<PatchApiUsersClient>[0]>;
        return: Awaited<ReturnType<PatchApiUsersClient>>;
    };
};
/**
 * @description Update user
 * @link /api/users/
 */
export function usePatchApiUsers(options: {
    mutation?: UseMutationOptions<PatchApiUsers["response"], PatchApiUsers["error"], PatchApiUsers["request"]>;
    client?: PatchApiUsers["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PatchApiUsers["data"], PatchApiUsers["error"], PatchApiUsers["request"]>({
                method: "patch",
                url: `/api/users/`,
                data,
                ...clientOptions
            });
            return res;
        },
        ...mutationOptions
    });
}