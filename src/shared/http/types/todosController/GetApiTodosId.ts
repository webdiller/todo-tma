export type GetApiTodosIdPathParams = {
    /**
     * @type string
    */
    id: string;
};
/**
 * @description Default Response
*/
export type GetApiTodosId200 = {
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
} | null;
/**
 * @description Default Response
*/
export type GetApiTodosIdQueryResponse = {
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
} | null;
export type GetApiTodosIdQuery = {
    Response: GetApiTodosIdQueryResponse;
    PathParams: GetApiTodosIdPathParams;
};