import { AxiosInstance } from 'axios';
export declare class OlaMapsAPI {
    private client;
    private auth;
    constructor(clientId: string, clientSecret: string);
    getClient(): AxiosInstance;
}
