"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var lodash_1 = __importDefault(require("lodash"));
var room_models_1 = __importDefault(require("../models/room.models"));
var roomType_services_1 = __importDefault(require("./roomType.services"));
var RoomService = (function () {
    function RoomService() {
    }
    RoomService.prototype.create = function (newRoomData) {
        return __awaiter(this, void 0, void 0, function () {
            var roomType, newRoom;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, roomType_services_1["default"].findById(newRoomData.roomType)];
                    case 1:
                        roomType = _a.sent();
                        if (!roomType) {
                            throw new Error("Room type not found");
                        }
                        newRoom = new room_models_1["default"](newRoomData);
                        return [4, newRoom.save()];
                    case 2:
                        _a.sent();
                        return [2, newRoom];
                }
            });
        });
    };
    RoomService.prototype.find = function (filter) {
        if (filter === void 0) { filter = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var rooms;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, room_models_1["default"].find(filter).populate({
                            path: "roomType",
                            model: "RoomType",
                            select: "id codeName"
                        })];
                    case 1:
                        rooms = _a.sent();
                        return [2, rooms];
                }
            });
        });
    };
    RoomService.prototype.search = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var priceQuery, roomTypeFilter, roomTypesIds, searchRoomTypeTerm, foundRoomTypes, searchTerm, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        priceQuery = {};
                        if (filter === null || filter === void 0 ? void 0 : filter.minPrice) {
                            priceQuery.price = { $gte: Number(filter === null || filter === void 0 ? void 0 : filter.minPrice) };
                        }
                        if (filter === null || filter === void 0 ? void 0 : filter.maxPrice) {
                            priceQuery.price = { $lte: Number(filter === null || filter === void 0 ? void 0 : filter.max) };
                        }
                        if (!(filter === null || filter === void 0 ? void 0 : filter.minPrice) && (filter === null || filter === void 0 ? void 0 : filter.maxPrice)) {
                            priceQuery.price = { $gte: 0 };
                            priceQuery.price = { $lte: Number(filter === null || filter === void 0 ? void 0 : filter.maxPrice) };
                        }
                        roomTypeFilter = {};
                        if (!(filter === null || filter === void 0 ? void 0 : filter.roomType)) return [3, 2];
                        searchRoomTypeTerm = {
                            codeName: {
                                $regex: filter === null || filter === void 0 ? void 0 : filter.roomType,
                                $options: "i"
                            }
                        };
                        return [4, roomType_services_1["default"].findAll(searchRoomTypeTerm)];
                    case 1:
                        foundRoomTypes = _a.sent();
                        if (!lodash_1["default"].isEmpty(foundRoomTypes)) {
                            roomTypesIds = foundRoomTypes.map(function (_rooType) {
                                return _rooType._id;
                            });
                        }
                        _a.label = 2;
                    case 2:
                        searchTerm = {
                            $or: []
                        };
                        if (filter === null || filter === void 0 ? void 0 : filter.search) {
                            searchTerm["$or"].push({
                                name: {
                                    $regex: filter === null || filter === void 0 ? void 0 : filter.search,
                                    $options: "i"
                                }
                            });
                        }
                        if (!lodash_1["default"].isEmpty(priceQuery)) {
                            searchTerm["$or"].push(priceQuery);
                        }
                        if (filter === null || filter === void 0 ? void 0 : filter.size) {
                            searchTerm["$or"].push({
                                size: { $regex: filter === null || filter === void 0 ? void 0 : filter.size, $options: "i" }
                            });
                        }
                        if (!lodash_1["default"].isEmpty(roomTypesIds)) {
                            searchTerm["$or"].push({
                                roomType: { $in: roomTypesIds }
                            });
                        }
                        return [4, room_models_1["default"].find(searchTerm).populate({
                                path: "roomType",
                                model: "RoomType"
                            })];
                    case 3:
                        result = _a.sent();
                        return [2, result];
                }
            });
        });
    };
    RoomService.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, room_models_1["default"].findById(id)];
                    case 1:
                        room = _a.sent();
                        return [2, room];
                }
            });
        });
    };
    RoomService.prototype.update = function (id, updatedData) {
        if (updatedData === void 0) { updatedData = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, room_models_1["default"].findByIdAndUpdate(id, updatedData, {
                            "new": true,
                            runValidator: true
                        })];
                    case 1:
                        room = _a.sent();
                        return [2, room];
                }
            });
        });
    };
    RoomService.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var room;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, room_models_1["default"].findByIdAndRemove(id)];
                    case 1:
                        room = _a.sent();
                        return [2, room];
                }
            });
        });
    };
    return RoomService;
}());
exports["default"] = new RoomService();
//# sourceMappingURL=room.service.js.map