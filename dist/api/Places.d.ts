import { OlaMapsAPI } from "../olaMapsAPI";
import { TAutoCompleteOption, TGeocodeOption, TReverseGeocodeOption } from "../utils/types";
export declare class Places {
    private api;
    private api_version;
    private get_url_path;
    constructor(api: OlaMapsAPI, api_version?: string);
    autocomplete(input: string, options?: TAutoCompleteOption): Promise<any>;
    reverseGeocode(lat: number | string, long: number | string, options?: TReverseGeocodeOption): Promise<any>;
    geoCode(address: string, options?: TGeocodeOption): Promise<any>;
}
