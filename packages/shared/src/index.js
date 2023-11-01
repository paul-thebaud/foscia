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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapVariadic = exports.wrap = exports.value = exports.uniqueValues = exports.toKebabCase = exports.sequentialTransform = exports.pluralize = exports.optionalJoin = exports.isNone = exports.isNil = exports.IdentifiersMap = exports.makeDescriptorHolder = exports.isDescriptorHolder = exports.eachDescriptors = exports.applyConfig = void 0;
var applyConfig_1 = require("@foscia/utils/applyConfig");
exports.applyConfig = applyConfig_1.default;
var sequentialTransform_1 = require("@foscia/utils/arrays/sequentialTransform");
exports.sequentialTransform = sequentialTransform_1.default;
var uniqueValues_1 = require("@foscia/utils/arrays/uniqueValues");
exports.uniqueValues = uniqueValues_1.default;
var wrap_1 = require("@foscia/utils/arrays/wrap");
exports.wrap = wrap_1.default;
var wrapVariadic_1 = require("@foscia/utils/arrays/wrapVariadic");
exports.wrapVariadic = wrapVariadic_1.default;
var isNil_1 = require("@foscia/utils/checks/isNil");
exports.isNil = isNil_1.default;
var isNone_1 = require("@foscia/utils/checks/isNone");
exports.isNone = isNone_1.default;
var eachDescriptors_1 = require("@foscia/utils/descriptors/eachDescriptors");
exports.eachDescriptors = eachDescriptors_1.default;
var isDescriptorHolder_1 = require("@foscia/utils/descriptors/isDescriptorHolder");
exports.isDescriptorHolder = isDescriptorHolder_1.default;
var makeDescriptorHolder_1 = require("@foscia/utils/descriptors/makeDescriptorHolder");
exports.makeDescriptorHolder = makeDescriptorHolder_1.default;
var identifiersMap_1 = require("@foscia/utils/identifiersMap");
exports.IdentifiersMap = identifiersMap_1.default;
var optionalJoin_1 = require("@foscia/utils/strings/optionalJoin");
exports.optionalJoin = optionalJoin_1.default;
var pluralize_1 = require("@foscia/utils/strings/pluralize");
exports.pluralize = pluralize_1.default;
var toKebabCase_1 = require("@foscia/utils/strings/toKebabCase");
exports.toKebabCase = toKebabCase_1.default;
var value_1 = require("@foscia/utils/value");
exports.value = value_1.default;
__exportStar(require("@foscia/utils/descriptors/types"), exports);
__exportStar(require("@foscia/utils/types"), exports);
