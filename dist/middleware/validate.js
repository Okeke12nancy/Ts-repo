"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.roomSchema = exports.roomTypeSchema = exports.authSchema = void 0;
var joi_1 = __importDefault(require("joi"));
exports.authSchema = joi_1["default"].object({
    name: joi_1["default"].string().required().max(50).min(3),
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(6).required(),
    roles: joi_1["default"].string().required().lowercase()
});
exports.roomTypeSchema = joi_1["default"].object({
    codeName: joi_1["default"].string().required().min(3).max(100)
});
exports.roomSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    price: joi_1["default"].number().required(),
    sizes: joi_1["default"].string().required(),
    roomType: joi_1["default"].string().required(),
    createdBy: joi_1["default"].string().required()
});
//# sourceMappingURL=validate.js.map