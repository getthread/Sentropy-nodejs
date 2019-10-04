// Node Modules
const got = require("got");
const uuidv4 = require("uuid/v4");

// Interfaces
import { ISentropyClient } from "./interfaces";

// Types
import {
  SentropyClientOpts,
  ClassificationRequestPayload,
  ClassificationResponsePayload,
  ClassificationRequestOpts
} from "./types";

// Constants
import { SENTROPY_API_URL } from './constants';

export class SentropyClient implements ISentropyClient {
  constructor(private apiKey: string, private opts: SentropyClientOpts) {}

  private _applyDefaultsToPayload(payload: ClassificationRequestPayload) {
    return {
      id: uuidv4(),
      ...payload
    };
  }

  private _constructHeaders(opts?: ClassificationRequestOpts) {
    const options = opts || this.opts;
    const headers = (options && options.headers) || {};
    return {
      "User-Agent": "Sentropy Nodejs",
      ...headers,
      Authorization: `Bearer ${this.apiKey}`,
      "content-type": "application/json"
    };
  }

  async classify(
    payload: ClassificationRequestPayload,
    opts?: ClassificationRequestOpts
  ): Promise<ClassificationResponsePayload> {
    const payloadWithDefaults = this._applyDefaultsToPayload(payload);

    return got
      .post(SENTROPY_API_URL, {
        body: JSON.stringify(payloadWithDefaults),
        headers: this._constructHeaders(opts)
      })
      .then(res => JSON.parse(res.body))
      .catch(err => {
        throw err;
      });
  }
}
