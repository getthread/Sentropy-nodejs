import { SentropyClient } from "./sentropy";
import { SentropyClientOpts } from "./types";
export * from "./types";

function sentropy(apiKey: string, opts: SentropyClientOpts = {}): SentropyClient {
  return new SentropyClient(apiKey, opts);
}

export default sentropy;
module.exports = sentropy;
