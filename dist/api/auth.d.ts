export declare class Auth {
    private clientId;
    private clientSecret;
    private accessToken?;
    constructor(clientId: string, clientSecret: string);
    getAccessToken(): Promise<string>;
}
