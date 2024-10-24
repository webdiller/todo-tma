/**
 * @description Default Response
*/
export type GetApiTodos200 = {
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
}[];
/**
 * @description Default Response
*/
export type GetApiTodosQueryResponse = {
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
}[];
export type GetApiTodosQuery = {
    Response: GetApiTodosQueryResponse;
};