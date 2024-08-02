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
exports.Routing = void 0;
var GetUrlPath_1 = require("../utils/GetUrlPath");
var Routing = /** @class */ (function () {
    function Routing(api, api_version) {
        this.api = api;
        this.api_version = api_version;
        this.get_url_path = new GetUrlPath_1.GetURL(this.api_version);
    }
    Routing.prototype.directions = function (origin, destination, options) {
        return __awaiter(this, void 0, void 0, function () {
            var params, headers, response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!origin || !destination)
                            throw new Error("Source and destination are required");
                        params = {
                            origin: "".concat(origin.lat, ",").concat(origin.long),
                            destination: "".concat(destination.lat, ",").concat(destination.long)
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
                            if (options.waypoints) {
                                params.waypoints = options.waypoints
                                    .map(function (pt) { return pt.join(","); })
                                    .join("|");
                            }
                            if (options.alternatives && typeof options.alternatives === "boolean") {
                                params.alternatives = options.alternatives;
                            }
                            if (options.steps && typeof options.steps === "boolean") {
                                params.steps = options.steps;
                            }
                            if (options.overview &&
                                (typeof options.overview === "boolean" ||
                                    typeof options.overview === "string")) {
                                params.overview = options.overview;
                            }
                            if (options.language) {
                                params.language = options.language;
                            }
                            if (typeof options.traffic_metadata === "boolean") {
                                params.traffic_metadata = options.traffic_metadata;
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.api
                                .getClient()
                                .post(this.get_url_path.get_routing_url(), {}, {
                                params: params,
                                headers: headers
                            })];
                    case 2:
                        response = _a.sent();
                        console.log(response);
                        return [2 /*return*/, Promise.resolve(response.data)];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Routing;
}());
exports.Routing = Routing;
