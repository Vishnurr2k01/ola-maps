import { Places } from "./api/Places";
import { Routing } from "./api/Routing";
interface IOlaMapsSDKOptions {
    clientId: string;
    clientSecret: string;
    api_version?: string;
}
export declare class OlaMapsSDK {
    private api;
    Places: Places;
    Routing: Routing;
    constructor(options: IOlaMapsSDKOptions);
}
export {};
