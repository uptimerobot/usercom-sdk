"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(_a) {
        var client = _a.client;
        this.client = client;
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
}());
exports.User = User;
//# sourceMappingURL=user.js.map