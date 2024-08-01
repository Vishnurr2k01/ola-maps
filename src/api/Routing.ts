  import { OlaMapsAPI } from "../olaMapsAPI";
  import { API_VERSION } from "../utils/Config";
  import { GetURL } from "../utils/GetUrlPath";
  import { TDirectionsOption, TGeoCord } from "../utils/types";

  export class Routing {
    private api: OlaMapsAPI;
    private api_version: string;
    private get_url_path: GetURL;

    constructor(api: OlaMapsAPI, api_version: string) {
      this.api = api;
      this.api_version=api_version
      this.get_url_path = new GetURL(this.api_version);
    }

    public async directions(
      origin: TGeoCord,
      destination: TGeoCord,
      options?: TDirectionsOption
    ):Promise<any> {
      if(!origin || !destination)throw new Error("Source and destination are required")
      const params: any = {
        origin:`${origin.lat},${origin.long}`,
        destination:`${destination.lat},${destination.long}`
      };
      const headers: Record<string, string> = {};

      if (options) {
        if (options["X-Correlation-Id"]) {
          headers["X-Correlation-Id"] = options["X-Correlation-Id"];
        }
        if (options["X-Request-Id"]) {
          headers["X-Request-Id"] = options["X-Request-Id"];
        }
      }

      if (options) {
        if (options.waypoints) {
          params.waypoints = options.waypoints
            .map((pt) => pt.join(","))
            .join("|");
        }

        if (options.alternatives && typeof options.alternatives === "boolean") {
          params.alternatives = options.alternatives;
        }

        if (options.steps && typeof options.steps === "boolean") {
          params.steps = options.steps;
        }
        if (
          options.overview &&
          (typeof options.overview === "boolean" ||
            typeof options.overview === "string")
        ) {
          params.overview = options.overview;
        }

        if (options.language) {
          params.language = options.language;
        }

        if (typeof options.traffic_metadata === "boolean") {
          params.traffic_metadata = options.traffic_metadata;
        }
      }
      try {
          const response = await this.api
            .getClient()
            .post<any>(this.get_url_path.get_routing_url(), {},{
              params: params,
              headers: headers,
            });
            console.log(response)
          return Promise.resolve(response.data);
        } catch (error) {
          console.log(error)
          return Promise.reject(error);
        }

    }

  }
