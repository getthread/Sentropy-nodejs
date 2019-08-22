import { SentropyClient } from "./sentropy";
export * from './sentropy';

function sentropy(
  apiKey: string,
  headers?: {[key: string]: string}
): SentropyClient {
  return new SentropyClient(apiKey, headers)
};

export default sentropy;
module.exports = sentropy;