"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Places = void 0;
var Config_1 = require("../utils/Config");
var GetUrlPath_1 = require("../utils/GetUrlPath");
var Places = /** @class */ (function () {
    function Places(api, api_version) {
        this.api = api;
        if (api_version) {
            this.api_version = api_version;
        }
        else {
            this.api_version = Config_1.API_VERSION;
        }
        this.get_url_path = new GetUrlPath_1.GetURL(this.api_version);
    }
    Places.prototype.autocomplete = function (input, options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, headers, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            input: input
                        };
                        headers = {};
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
                                params.location = "".concat(options.location.lat, ",").concat(options.location.long);
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api
                                .getClient()
                                .get(this.get_url_path.get_autocomplete_url(), {
                                params: params,
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, Promise.resolve(response.data)];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Places.prototype.reverseGeocode = function (lat, long, options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, headers, response, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            latlng: "".concat(lat, ",").concat(long)
                        };
                        headers = {};
                        if (options) {
                            if (options["X-Correlation-Id"]) {
                                headers["X-Correlation-Id"] = options["X-Correlation-Id"];
                            }
                            if (options["X-Request-Id"]) {
                                headers["X-Request-Id"] = options["X-Request-Id"];
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api
                                .getClient()
                                .get(this.get_url_path.get_reversegeocode_url(), {
                                params: params,
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, Promise.resolve(response.data)];
                    case 3:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Places.prototype.geoCode = function (address, options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, headers, x, y, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            address: address
                        };
                        headers = {};
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
                                x = [options.bounding.x.lat, options.bounding.x.long].join(",");
                                y = [options.bounding.y.lat, options.bounding.y.long].join(",");
                                params.bounding = [x, y].join("|");
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api
                                .getClient()
                                .get(this.get_url_path.get_geocode_url(), {
                                params: params,
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        return [2 /*return*/, Promise.resolve(response.data)];
                    case 3:
                        error_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_3)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Places;
}());
exports.Places = Places;
