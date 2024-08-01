import { Places } from "./api/Places";
import { Routing } from "./api/Routing";
import { OlaMapsAPI } from "./olaMapsAPI";
import { API_VERSION } from "./utils/Config";


interface IOlaMapsSDKOptions {
    clientId: string;
    clientSecret: string;
    api_version?:string
}

export class OlaMapsSDK{
    private api:OlaMapsAPI
    public Places:Places
    public Routing:Routing

    constructor(options:IOlaMapsSDKOptions){
        if (!options.clientId || !options.clientSecret) {
            throw new Error('clientId and clientSecret are required');
          }
        if(options.api_version==undefined){
            options.api_version=API_VERSION
        }
        this.api = new OlaMapsAPI(options.clientId,options.clientSecret)
        this.Places = new Places(this.api,options.api_version)
        this.Routing = new Routing(this.api,options.api_version)
    }
}