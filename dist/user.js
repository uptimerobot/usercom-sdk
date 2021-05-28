"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var baseEndpoint_1 = require("./baseEndpoint");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(_a) {
        var client = _a.client;
        return _super.call(this, { client: client }) || this;
    }
    User.prototype.users = function (_a) {
        var _b = _a.next, next = _b === void 0 ? null : _b;
        var endpoint = next || "/users/";
        return this.client.get(endpoint);
    };
    User.prototype.create = function (_a) {
        var data = _a.data;
        return this.client.post("/users/", data);
    };
    User.prototype.update = function (_a) {
        var userId = _a.userId, customAttributes = _a.customAttributes;
        return this.setCustomAttributes({ userId: userId, customAttributes: customAttributes });
    };
    User.prototype.delete = function (_a) {
        var userId = _a.userId;
        return this.client.delete("/users-by-id/" + userId + "/");
    };
    User.prototype.setCustomAttributes = function (_a) {
        var userId = _a.userId, customAttributes = _a.customAttributes;
        return this.client.post("/users-by-id/" + userId + "/set_multiple_attributes/", customAttributes);
    };
    return User;
}(baseEndpoint_1.BaseEndpoint));
exports.User = User;
//# sourceMappingURL=user.js.map