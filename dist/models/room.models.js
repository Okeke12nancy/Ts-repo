"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var roomSchema = new mongoose_1["default"].Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        unique: true,
        trim: true
    },
    price: {
        type: Number,
        min: 1,
        required: true
    },
    size: {
        type: String,
        "enum": ["small", "big", "medium"],
        lowercase: true,
        "default": "small"
    },
    roomType: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: "RoomType",
        required: [true, "Please provide a room type"]
    },
    createdBy: {
        type: mongoose_1["default"].Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user"]
    }
}, { timestamps: true });
roomSchema.set("toJSON", {
    versionKey: false,
    transform: function (doc, ret) {
        delete ret.__v;
    }
});
var Room = mongoose_1["default"].model("Room", roomSchema);
exports["default"] = Room;
//# sourceMappingURL=room.models.js.map