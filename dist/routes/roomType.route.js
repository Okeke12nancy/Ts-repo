"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var roomType_controllers_1 = __importDefault(require("../controllers/roomType.controllers"));
var auth2_1 = require("../middleware/auth2");
var roomTypeRouter = (0, express_1.Router)();
roomTypeRouter.post("/", auth2_1.isAdmin, roomType_controllers_1["default"].create);
roomTypeRouter.get("/:id", roomType_controllers_1["default"].findById);
roomTypeRouter.get("/", roomType_controllers_1["default"].findAll);
roomTypeRouter.put("/:id", auth2_1.isAdmin, roomType_controllers_1["default"].update);
roomTypeRouter["delete"]("/:id", auth2_1.isAdmin, roomType_controllers_1["default"]["delete"]);
exports["default"] = roomTypeRouter;
//# sourceMappingURL=roomType.route.js.map