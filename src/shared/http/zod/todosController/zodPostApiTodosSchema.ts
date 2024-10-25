import { z } from "zod";

 /**
 * @description Default Response
 */
export const zodPostApiTodos200Schema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() });

 export const zodPostApiTodosMutationRequestSchema = z.object({ "questionTitle": z.string(), "questionAnswer": z.string(), "repeat": z.array(z.string().datetime()), "referencesToTheSource": z.array(z.string()) });
/**
 * @description Default Response
 */
export const zodPostApiTodosMutationResponseSchema = z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() });