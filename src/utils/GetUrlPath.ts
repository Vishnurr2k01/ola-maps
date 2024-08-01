import { API_VERSION } from "./Config";

export class GetURL {
  private api_version: string;

  private geocode_url:string
  private autocomplete_url:string
  private reversegeocode_url:string
  private routing_url:string

  constructor(api_version: string) {
    if (api_version) {
      this.api_version = api_version;
    } else {
      this.api_version = API_VERSION;
    }
    this.geocode_url = `/places/${this.api_version}/geocode`
    this.reversegeocode_url = `/places/${this.api_version}/reverse-geocode`
    this.autocomplete_url = `/places/${this.api_version}/autocomplete`
    this.routing_url = `/routing/${this.api_version}/directions`
  }

  public get_geocode_url(){
    return this.reversegeocode_url
  }
  public get_autocomplete_url(){
    return this.autocomplete_url
  }
  public get_reversegeocode_url(){
    console.log((this.reversegeocode_url))
    return this.reversegeocode_url
  }
  public get_routing_url(){
    return this.routing_url
  }

}
