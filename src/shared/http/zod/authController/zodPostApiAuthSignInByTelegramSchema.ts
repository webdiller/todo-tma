import { z } from "zod";

 /**
 * @description Default Response
 */
export const zodPostApiAuthSignInByTelegram200Schema = z.object({ "tokens": z.object({ "accessToken": z.string() }) });

 export const zodPostApiAuthSignInByTelegramMutationRequestSchema = z.object({ "user": z.object({ "addedToAttachmentMenu": z.boolean().optional(), "allowsWriteToPm": z.boolean().optional(), "firstName": z.string(), "id": z.number(), "isBot": z.boolean().optional(), "isPremium": z.boolean().optional(), "lastName": z.string().optional(), "languageCode": z.string().optional(), "photoUrl": z.string().optional(), "username": z.string().optional() }), "hash": z.string() });
/**
 * @description Default Response
 */
export const zodPostApiAuthSignInByTelegramMutationResponseSchema = z.object({ "tokens": z.object({ "accessToken": z.string() }) });