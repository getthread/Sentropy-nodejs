"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const sentropy_1 = require("./sentropy");
__export(require("./sentropy"));
function sentropy(apiKey, headers) {
    return new sentropy_1.SentropyClient(apiKey, headers);
}
;
exports.default = sentropy;
module.exports = sentropy;
