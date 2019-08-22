const got = require('got');
const uuidv4 = require('uuid/v4');

const SENTROPY_API_URL = "https://api.alpha.sentropy.io/";

export interface ISentropyClient {
  classify: (payload: ClassificationRequestPayload) => Promise<ClassificationResponsePayload>
}

export interface ClassificationRequestPayload {
  id?: string,
  text: string,
  author: string,
  segment: string
}

export interface SentropyClientOpts {
  headers?: {[key: string]: string}
}

export class SentropyClient implements ISentropyClient {

  constructor(
    private apiKey: string,
    private opts?: SentropyClientOpts
  ){}

  private _applyDefaultsToPayload(payload: ClassificationRequestPayload) {
    return {
      id: uuidv4(),
      ...payload
    };
  }

  async classify(payload: ClassificationRequestPayload): Promise<ClassificationResponsePayload> {
    const payloadWithDefaults = this._applyDefaultsToPayload(payload);
    const headers = this.opts && this.opts.headers || {};
    const results = await got.post(SENTROPY_API_URL, {
      body: JSON.stringify(payloadWithDefaults),
      headers: {
        "User-Agent": "Thread/Sentropy Nodejs",
        ... headers,
        "Authorization": `Bearer ${this.apiKey}`,
        "content-type": "application/json"
      }
    });

    return JSON.parse(results.body);
  }
}

export interface ClassificationResponsePayload {
  id: string,
  author: string,
  segment: string,
  label_probabilities: {
    IDENTITY_ATTACK: number,
    SEXUAL_AGGRESSION: number,
    PHYSICAL_VIOLENCE: number,
    NEONAZISM: number
  }
}