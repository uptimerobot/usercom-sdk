"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usercom = void 0;
var axios_1 = __importDefault(require("axios"));
var axios_retry_1 = __importDefault(require("axios-retry"));
var user_1 = require("./user");
var Usercom = /** @class */ (function () {
    function Usercom(_a) {
        var subdomain = _a.subdomain, token = _a.token;
        this.token = token;
        this.axios = axios_1.default.create({
            baseURL: "https://" + subdomain + ".user.com/api/public",
            headers: {
                Authorization: "Token " + token,
                'content-type': 'application/json',
            },
            timeout: 60000,
        });
        axios_retry_1.default(this.axios, {
            retries: 3,
            retryDelay: function (retryCount, error) {
                var _a, _b;
                // NOTE: if we hit rate limit delay the next retry for the time specified in headers
                if ((_b = (_a = error.response) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b['retry-after']) {
                    return error.response.headers['retry-after'];
                }
                return axios_retry_1.default.exponentialDelay(retryCount);
            },
            retryCondition: function (e) {
                if (axios_retry_1.default.isNetworkOrIdempotentRequestError(e)) {
                    return true;
                }
                if (e.response && e.response.status === 429) {
                    return true;
                }
                return false;
            },
        });
        this.user = new user_1.User({ client: this.axios });
    }
    return Usercom;
}());
exports.Usercom = Usercom;
var LogLevel;
(function (LogLevel) {
    LogLevel["log"] = "log";
    LogLevel["warn"] = "warn";
    LogLevel["error"] = "error";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=client.js.map