import client from "@/shared/utils/kubb-clients/axios-client";
import type { ResponseConfig } from "@/shared/utils/kubb-clients/axios-client";
import type { PostApiAuthSignInByTelegramMutationRequest, PostApiAuthSignInByTelegramMutationResponse } from "../../../types/authController/PostApiAuthSignInByTelegram";

 /**
 * @description Sign Up by telegram
 * @summary Sign Up by telegram
 * @link /api/auth/sign-in-by-telegram
 */
export async function postApiAuthSignInByTelegram(data: PostApiAuthSignInByTelegramMutationRequest, options: Partial<Parameters<typeof client>[0]> = {}): Promise<ResponseConfig<PostApiAuthSignInByTelegramMutationResponse>> {
    const res = await client<PostApiAuthSignInByTelegramMutationResponse, PostApiAuthSignInByTelegramMutationRequest>({ method: "post", url: `/api/auth/sign-in-by-telegram`, data, ...options });
    return res;
}