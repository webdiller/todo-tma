/**
 * @description Default Response
*/
export type PostApiTodos200 = {
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
};
export type PostApiTodosMutationRequest = {
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
     * @type array
    */
    referencesToTheSource: string[];
};
/**
 * @description Default Response
*/
export type PostApiTodosMutationResponse = {
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
};
export type PostApiTodosMutation = {
    Response: PostApiTodosMutationResponse;
    Request: PostApiTodosMutationRequest;
};