"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pino_1 = __importDefault(require("pino"));
var logger = (0, pino_1["default"])();
exports["default"] = (function (error, req, res, next) {
    logger.error(error);
    return res.status(500).send({
        success: false,
        message: error.message
    });
});
//# sourceMappingURL=errors.middleware.js.map