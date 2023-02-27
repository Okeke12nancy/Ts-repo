"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var xss_clean_1 = __importDefault(require("xss-clean"));
var errors_middleware_1 = __importDefault(require("./errors.middleware"));
var app_routes_1 = __importDefault(require("../routes/app.routes"));
var not_found_1 = __importDefault(require("./not-found"));
var error_handler_1 = __importDefault(require("./error-handler"));
var database_1 = __importDefault(require("../config/database"));
(0, database_1["default"])();
exports["default"] = (function (app) {
    app.use((0, morgan_1["default"])("dev"));
    app.use((0, cors_1["default"])());
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: true }));
    app.use((0, helmet_1["default"])());
    app.use((0, cors_1["default"])());
    app.use((0, xss_clean_1["default"])());
    (0, app_routes_1["default"])(app);
    app.use(not_found_1["default"]);
    app.use(error_handler_1["default"]);
    app.use(errors_middleware_1["default"]);
});
//# sourceMappingURL=appMiddleware.js.map