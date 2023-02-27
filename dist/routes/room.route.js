"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var room_controllers_1 = __importDefault(require("../controllers/room.controllers"));
var auth2_1 = require("../middleware/auth2");
var roomRouter = (0, express_1.Router)();
roomRouter.post("/", auth2_1.isAdmin, room_controllers_1["default"].create);
roomRouter.get("/", room_controllers_1["default"].find);
roomRouter.get("/:id", room_controllers_1["default"].findById);
roomRouter.put("/:id", auth2_1.isAdmin, room_controllers_1["default"].update);
roomRouter["delete"]("/:id", auth2_1.isAdmin, room_controllers_1["default"]["delete"]);
exports["default"] = roomRouter;
//# sourceMappingURL=room.route.js.map