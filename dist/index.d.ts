import { SentropyClient } from "./sentropy";
export * from './sentropy';
declare function sentropy(apiKey: string, headers?: {
    [key: string]: string;
}): SentropyClient;
export default sentropy;
