import { z } from "zod";

 /**
 * @description Default Response
 */
export const zodPatchApiUsers200Schema = z.object({ "timezone": z.string().nullable().nullish() });

 export const zodPatchApiUsersMutationRequestSchema = z.object({ "timezone": z.string().nullable().nullish() });
/**
 * @description Default Response
 */
export const zodPatchApiUsersMutationResponseSchema = z.object({ "timezone": z.string().nullable().nullish() });