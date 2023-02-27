"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var pino_1 = __importDefault(require("pino"));
var appMiddleware_1 = __importDefault(require("./middleware/appMiddleware"));
var logger = (0, pino_1["default"])();
var app = (0, express_1["default"])();
(0, appMiddleware_1["default"])(app);
var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    logger.info("listening on port ".concat(PORT));
});
//# sourceMappingURL=app.js.map