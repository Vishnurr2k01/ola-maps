"use strict";
exports.__esModule = true;
exports.OlaMapsSDK = void 0;
var Places_1 = require("./api/Places");
var Routing_1 = require("./api/Routing");
var olaMapsAPI_1 = require("./olaMapsAPI");
var Config_1 = require("./utils/Config");
var OlaMapsSDK = /** @class */ (function () {
    function OlaMapsSDK(options) {
        if (!options.clientId || !options.clientSecret) {
            throw new Error('clientId and clientSecret are required');
        }
        if (options.api_version == undefined) {
            options.api_version = Config_1.API_VERSION;
        }
        this.api = new olaMapsAPI_1.OlaMapsAPI(options.clientId, options.clientSecret);
        this.Places = new Places_1.Places(this.api, options.api_version);
        this.Routing = new Routing_1.Routing(this.api, options.api_version);
    }
    return OlaMapsSDK;
}());
exports.OlaMapsSDK = OlaMapsSDK;
