import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { PatchApiUsersMutationRequest, PatchApiUsersMutationResponse } from "../../../types/userController/PatchApiUsers";

 /**
 * @description Update user
 * @link /api/users/
 */
export async function patchApiUsers(data?: PatchApiUsersMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PatchApiUsersMutationResponse>> {
    const res = await client<PatchApiUsersMutationResponse, PatchApiUsersMutationRequest>({ method: "patch", url: `/api/users/`, data, ...options });
    return res;
}