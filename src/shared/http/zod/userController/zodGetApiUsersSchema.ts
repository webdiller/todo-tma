import { z } from "zod";

 /**
 * @description Default Response
 */
export const zodGetApiUsers200Schema = z.object({ "timezone": z.string().nullable().nullish() });
/**
 * @description Default Response
 */
export const zodGetApiUsersQueryResponseSchema = z.object({ "timezone": z.string().nullable().nullish() });