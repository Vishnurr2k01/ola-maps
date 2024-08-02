import { OlaMapsAPI } from "../olaMapsAPI";
import {
  TAutoCompleteOption,
  TGeocodeOption,
  TReverseGeocodeOption,
} from "../utils/types";
import { API_VERSION } from "../utils/Config";
import { GetURL } from "../utils/GetUrlPath";

export class Places {
  private api: OlaMapsAPI;
  private api_version: string;
  private get_url_path: GetURL;

  constructor(api: OlaMapsAPI, api_version?: string) {
    this.api = api;
    if (api_version) {
      this.api_version = api_version;
    } else {
      this.api_version = API_VERSION;
    }
    this.get_url_path = new GetURL(this.api_version);
  }
  public async autocomplete(
    input: string,
    options?: TAutoCompleteOption
  ): Promise<any> {
    const params: any = {
      input: input,
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
      if (options.language) {
        params.language = options.language;
      }

      if (typeof options.radius === "number" && options.radius >= 0) {
        params.adius = options.radius;
      }

      if (typeof options.strictbounds === "boolean") {
        params.strictbounds = options.strictbounds;
      }

      if (options.location) {
        params.location = `${options.location.lat},${options.location.long}`;
      }
    }

    try {
      const response = await this.api
        .getClient()
        .get<any>(this.get_url_path.get_autocomplete_url(), {
          params: params,
          headers: headers,
        });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public async reverseGeocode(
    lat: number | string,
    long: number | string,
    options?: TReverseGeocodeOption
  ): Promise<any> {
    const params: any = {
      latlng: `${lat},${long}`,
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
    try {
      const response = await this.api
        .getClient()
        .get<any>(this.get_url_path.get_reversegeocode_url(), {
          params: params,
          headers: headers,
        });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
  public async geoCode(
    address: string,
    options?: TGeocodeOption
  ): Promise<any> {
    const params: any = {
      address: address,
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
      if (options.language) {
        params.language = options.language;
      }

      if (options.bounding) {
        const x = [options.bounding.x.lat, options.bounding.x.long].join(",");
        const y = [options.bounding.y.lat, options.bounding.y.long].join(",");

        params.bounding = [x, y].join("|");
      }
    }
    try {
    const response = await this.api
      .getClient()
      .get<any>(this.get_url_path.get_geocode_url(), {
        params: params,
        headers: headers,
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
