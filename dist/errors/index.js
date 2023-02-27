"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.BadRequestError = exports.NotFoundError = exports.UnauthenticatedError = exports.CustomAPIError = void 0;
var custom_api_1 = require("./custom-api");
__createBinding(exports, custom_api_1, "default", "CustomAPIError");
var unauthenticated_1 = require("./unauthenticated");
__createBinding(exports, unauthenticated_1, "UnauthenticatedError");
var not_found_1 = require("./not-found");
__createBinding(exports, not_found_1, "NotFoundError");
var bad_request_1 = require("./bad-request");
__createBinding(exports, bad_request_1, "BadRequestError");
//# sourceMappingURL=index.js.map