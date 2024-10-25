export type DeleteApiTodosIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Default Response
*/
export type DeleteApiTodosId200 = {
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
     * @type array
    */
    referencesToTheSource: string[];
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
} | null;
/**
 * @description Default Response
*/
export type DeleteApiTodosIdMutationResponse = {
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
     * @type array
    */
    referencesToTheSource: string[];
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
} | null;
export type DeleteApiTodosIdMutation = {
    Response: DeleteApiTodosIdMutationResponse;
    PathParams: DeleteApiTodosIdPathParams;
};