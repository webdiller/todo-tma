/**
 * @description Default Response
*/
export type PostApiAuthSignInByTelegram200 = {
    /**
     * @type object
    */
    tokens: {
        /**
         * @type string
        */
        accessToken: string;
    };
};
export type PostApiAuthSignInByTelegramMutationRequest = {
    /**
     * @type object
    */
    user: {
        /**
         * @type boolean | undefined
        */
        addedToAttachmentMenu?: boolean;
        /**
         * @type boolean | undefined
        */
        allowsWriteToPm?: boolean;
        /**
         * @type string
        */
        firstName: string;
        /**
         * @type number
        */
        id: number;
        /**
         * @type boolean | undefined
        */
        isBot?: boolean;
        /**
         * @type boolean | undefined
        */
        isPremium?: boolean;
        /**
         * @type string | undefined
        */
        lastName?: string;
        /**
         * @type string | undefined
        */
        languageCode?: string;
        /**
         * @type string | undefined
        */
        photoUrl?: string;
        /**
         * @type string | undefined
        */
        username?: string;
    };
    /**
     * @type string
    */
    hash: string;
};
/**
 * @description Default Response
*/
export type PostApiAuthSignInByTelegramMutationResponse = {
    /**
     * @type object
    */
    tokens: {
        /**
         * @type string
        */
        accessToken: string;
    };
};
export type PostApiAuthSignInByTelegramMutation = {
    Response: PostApiAuthSignInByTelegramMutationResponse;
    Request: PostApiAuthSignInByTelegramMutationRequest;
};