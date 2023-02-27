"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var roomTypeSchema = new mongoose_1["default"].Schema({
    codeName: {
        type: String,
        required: [true, "Please enter a code name for room type"],
        minlength: 3,
        maxlength: 100,
        unique: true,
        trim: true
    }
}, { timestamps: true });
roomTypeSchema.set("toJSON", {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.__v;
    }
});
var RoomType = mongoose_1["default"].model("RoomType", roomTypeSchema);
exports["default"] = RoomType;
//# sourceMappingURL=roomTypes.models.js.map