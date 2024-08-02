"use strict";
exports.__esModule = true;
exports.GetURL = void 0;
var Config_1 = require("./Config");
var GetURL = /** @class */ (function () {
    function GetURL(api_version) {
        if (api_version) {
            this.api_version = api_version;
        }
        else {
            this.api_version = Config_1.API_VERSION;
        }
        this.geocode_url = "/places/".concat(this.api_version, "/geocode");
        this.reversegeocode_url = "/places/".concat(this.api_version, "/reverse-geocode");
        this.autocomplete_url = "/places/".concat(this.api_version, "/autocomplete");
        this.routing_url = "/routing/".concat(this.api_version, "/directions");
    }
    GetURL.prototype.get_geocode_url = function () {
        return this.geocode_url;
    };
    GetURL.prototype.get_autocomplete_url = function () {
        return this.autocomplete_url;
    };
    GetURL.prototype.get_reversegeocode_url = function () {
        console.log((this.reversegeocode_url));
        return this.reversegeocode_url;
    };
    GetURL.prototype.get_routing_url = function () {
        return this.routing_url;
    };
    return GetURL;
}());
exports.GetURL = GetURL;
