import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { GetQueryResponse } from "../../types/Get";

 /**
 * @link /
 */
export async function get(options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<GetQueryResponse>> {
    const res = await client<GetQueryResponse>({ method: "get", url: `/`, ...options });
    return res;
}