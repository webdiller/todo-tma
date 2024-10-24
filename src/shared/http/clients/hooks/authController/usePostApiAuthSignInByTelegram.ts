import client from "@/shared/utils/kubb-clients/axios-client";
import { useMutation } from "@tanstack/react-query";
import type { PostApiAuthSignInByTelegramMutationRequest, PostApiAuthSignInByTelegramMutationResponse } from "../../../types/authController/PostApiAuthSignInByTelegram";
import type { UseMutationOptions } from "@tanstack/react-query";

 type PostApiAuthSignInByTelegramClient = typeof client<PostApiAuthSignInByTelegramMutationResponse, Error, PostApiAuthSignInByTelegramMutationRequest>;
type PostApiAuthSignInByTelegram = {
    data: PostApiAuthSignInByTelegramMutationResponse;
    error: Error;
    request: PostApiAuthSignInByTelegramMutationRequest;
    pathParams: never;
    queryParams: never;
    headerParams: never;
    response: Awaited<ReturnType<PostApiAuthSignInByTelegramClient>>;
    client: {
        parameters: Partial<Parameters<PostApiAuthSignInByTelegramClient>[0]>;
        return: Awaited<ReturnType<PostApiAuthSignInByTelegramClient>>;
    };
};
/**
 * @description Sign Up by telegram
 * @summary Sign Up by telegram
 * @link /api/auth/sign-in-by-telegram
 */
export function usePostApiAuthSignInByTelegram(options: {
    mutation?: UseMutationOptions<PostApiAuthSignInByTelegram["response"], PostApiAuthSignInByTelegram["error"], PostApiAuthSignInByTelegram["request"]>;
    client?: PostApiAuthSignInByTelegram["client"]["parameters"];
} = {}) {
    const { mutation: mutationOptions, client: clientOptions = {} } = options ?? {};
    return useMutation({
        mutationFn: async (data) => {
            const res = await client<PostApiAuthSignInByTelegram["data"], PostApiAuthSignInByTelegram["error"], PostApiAuthSignInByTelegram["request"]>({
                method: "post",
                url: `/api/auth/sign-in-by-telegram`,
                data,
                ...clientOptions
            });
            return res;
        },
        ...mutationOptions
    });
}