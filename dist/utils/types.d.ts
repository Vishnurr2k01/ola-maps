type TLanguage = "en" | "kn" | "hi";
type TOverView = "full" | "simplied" | false;
type TAutoCompleteOption = {
    "X-Request-Id"?: string;
    "X-Correlation-Id"?: string;
    language?: TLanguage;
    location?: {
        lat: string | number;
        long: string | number;
    };
    radius?: number;
    strictbounds?: boolean;
};
type TGeocodeOption = {
    "X-Request-Id"?: string;
    "X-Correlation-Id"?: string;
    language?: TLanguage;
    bounding?: {
        x: {
            lat: string | number;
            long: string | number;
        };
        y: {
            lat: string | number;
            long: string | number;
        };
    };
};
type TReverseGeocodeOption = {
    "X-Request-Id"?: string;
    "X-Correlation-Id"?: string;
};
type TDirectionsOption = {
    "X-Request-Id"?: string;
    "X-Correlation-Id"?: string;
    waypoints?: Array<[string | number, string | number]>;
    alternatives?: boolean;
    steps?: boolean;
    overview?: TOverView;
    language?: TLanguage;
    traffic_metadata?: boolean;
};
type TGeoCord = {
    lat: string | number;
    long: string | number;
};
export { TGeocodeOption, TReverseGeocodeOption, TAutoCompleteOption, TDirectionsOption, TGeoCord };
