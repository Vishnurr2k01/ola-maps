import { OlaMapsAPI } from "../olaMapsAPI";
import { TDirectionsOption, TGeoCord } from "../utils/types";
export declare class Routing {
    private api;
    private api_version;
    private get_url_path;
    constructor(api: OlaMapsAPI, api_version: string);
    directions(origin: TGeoCord, destination: TGeoCord, options?: TDirectionsOption): Promise<any>;
}
