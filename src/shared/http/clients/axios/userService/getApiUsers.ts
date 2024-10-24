import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { GetApiUsersQueryResponse } from "../../../types/userController/GetApiUsers";

 /**
 * @description Get user
 * @link /api/users/
 */
export async function getApiUsers(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetApiUsersQueryResponse>> {
    const res = await client<GetApiUsersQueryResponse>({ method: "get", url: `/api/users/`, ...options });
    return res;
}