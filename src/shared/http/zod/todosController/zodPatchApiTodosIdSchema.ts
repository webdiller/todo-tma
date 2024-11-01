import { z } from "zod";


export const zodPatchApiTodosIdPathParamsSchema = z.object({ "id": z.string() });
/**
 * @description Default Response
 */
export const zodPatchApiTodosId200Schema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() });

 export const zodPatchApiTodosIdMutationRequestSchema = z.object({ "questionTitle": z.string(), "questionAnswer": z.string(), "repeat": z.array(z.string().datetime()), "isActive": z.boolean(), "referencesToTheSource": z.array(z.string()) });
/**
 * @description Default Response
 */
export const zodPatchApiTodosIdMutationResponseSchema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() });