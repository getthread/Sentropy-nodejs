"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const got = require('got');
const uuidv4 = require('uuid/v4');
const SENTROPY_API_URL = "https://api.alpha.sentropy.io/";
class SentropyClient {
    constructor(apiKey, headers) {
        this.apiKey = apiKey;
        this.headers = headers;
    }
    _applyDefaultsToPayload(payload) {
        return Object.assign({ id: uuidv4() }, payload);
    }
    async classify(payload) {
        const payloadWithDefaults = this._applyDefaultsToPayload(payload);
        const results = await got.post(SENTROPY_API_URL, {
            body: JSON.stringify(payloadWithDefaults),
            headers: Object.assign({ "User-Agent": "Thread/Sentropy Nodejs" }, this.headers, { "Authorization": `Bearer ${this.apiKey}`, "content-type": "application/json" })
        });
        return JSON.parse(results.body);
    }
}
exports.SentropyClient = SentropyClient;
