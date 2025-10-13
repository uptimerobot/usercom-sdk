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
exports.Event = void 0;
var baseEndpoint_1 = require("./baseEndpoint");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(_a) {
        var client = _a.client;
        return _super.call(this, { client: client }) || this;
    }
    Event.prototype.create = function (_a) {
        var userId = _a.userId, name = _a.name, timestamp = _a.timestamp, data = _a.data;
        return this.client.post("/users-by-id/".concat(userId, "/events/"), { name: name, timestamp: timestamp, data: data });
    };
    return Event;
}(baseEndpoint_1.BaseEndpoint));
exports.Event = Event;
//# sourceMappingURL=event.js.map