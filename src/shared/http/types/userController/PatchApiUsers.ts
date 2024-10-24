/**
 * @description Default Response
*/
export type PatchApiUsers200 = {
    /**
     * @type string
    */
    timezone?: string | null;
};
export type PatchApiUsersMutationRequest = {
    /**
     * @type string
    */
    timezone?: string | null;
};
/**
 * @description Default Response
*/
export type PatchApiUsersMutationResponse = {
    /**
     * @type string
    */
    timezone?: string | null;
};
export type PatchApiUsersMutation = {
    Response: PatchApiUsersMutationResponse;
    Request: PatchApiUsersMutationRequest;
};