export declare class GetURL {
    private api_version;
    private geocode_url;
    private autocomplete_url;
    private reversegeocode_url;
    private routing_url;
    constructor(api_version: string);
    get_geocode_url(): string;
    get_autocomplete_url(): string;
    get_reversegeocode_url(): string;
    get_routing_url(): string;
}
