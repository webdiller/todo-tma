import { z } from "zod";


export const zodGetApiTodosIdPathParamsSchema = z.object({ "id": z.string() });
/**
 * @description Default Response
 */
export const zodGetApiTodosId200Schema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() }).nullable();
/**
 * @description Default Response
 */
export const zodGetApiTodosIdQueryResponseSchema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() }).nullable();