export type PatchApiTodosIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Default Response
*/
export type PatchApiTodosId200 = {
    /**
     * @type integer
    */
    id: number;
    /**
     * @type string
    */
    questionTitle: string;
    /**
     * @type string
    */
    questionAnswer: string;
    /**
     * @type boolean
    */
    isActive: boolean;
    /**
     * @type array
    */
    repeat: string[];
    /**
     * @type string, date-time
    */
    createdAt: string;
    /**
     * @type string, date-time
    */
    updatedAt: string;
    /**
     * @type string
    */
    userId?: string | null;
};
export type PatchApiTodosIdMutationRequest = {
    /**
     * @type string
    */
    questionTitle: string;
    /**
     * @type string
    */
    questionAnswer: string;
    /**
     * @type array
    */
    repeat: string[];
    /**
     * @type boolean
    */
    isActive: boolean;
};
/**
 * @description Default Response
*/
export type PatchApiTodosIdMutationResponse = {
    /**
     * @type integer
    */
    id: number;
    /**
     * @type string
    */
    questionTitle: string;
    /**
     * @type string
    */
    questionAnswer: string;
    /**
     * @type boolean
    */
    isActive: boolean;
    /**
     * @type array
    */
    repeat: string[];
    /**
     * @type string, date-time
    */
    createdAt: string;
    /**
     * @type string, date-time
    */
    updatedAt: string;
    /**
     * @type string
    */
    userId?: string | null;
};
export type PatchApiTodosIdMutation = {
    Response: PatchApiTodosIdMutationResponse;
    Request: PatchApiTodosIdMutationRequest;
    PathParams: PatchApiTodosIdPathParams;
};