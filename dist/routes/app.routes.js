"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var roomType_route_1 = __importDefault(require("./roomType.route"));
var room_route_1 = __importDefault(require("./room.route"));
var auth_routes_1 = __importDefault(require("./auth.routes"));
var basePath = "/api/v1";
exports["default"] = (function (app) {
    app.use("".concat(basePath), auth_routes_1["default"]);
    app.use("".concat(basePath, "/rooms"), room_route_1["default"]);
    app.use("".concat(basePath, "/room-types"), roomType_route_1["default"]);
});
//# sourceMappingURL=app.routes.js.map