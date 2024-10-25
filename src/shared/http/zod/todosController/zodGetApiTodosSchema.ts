import { z } from "zod";

 /**
 * @description Default Response
 */
export const zodGetApiTodos200Schema = z.array(z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() }));
/**
 * @description Default Response
 */
export const zodGetApiTodosQueryResponseSchema = z.array(z.object({ "id": z.number().int(), "questionTitle": z.string(), "questionAnswer": z.string(), "referencesToTheSource": z.array(z.string()), "isActive": z.boolean(), "repeat": z.array(z.string().datetime()), "createdAt": z.string().datetime(), "updatedAt": z.string().datetime(), "userId": z.string().nullable().nullish() }));