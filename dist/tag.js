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
exports.Tag = void 0;
var baseEndpoint_1 = require("./baseEndpoint");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag(_a) {
        var client = _a.client;
        return _super.call(this, { client: client }) || this;
    }
    Tag.prototype.tags = function () {
        return this.client.get("/tags/");
    };
    Tag.prototype.getUsersWithTag = function (tagId) {
        var _this = this;
        return function (next) {
            if (next === void 0) { next = null; }
            var endpoint = next || "/tags/" + tagId + "/users/";
            return _this.client.get(endpoint);
        };
    };
    return Tag;
}(baseEndpoint_1.BaseEndpoint));
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map