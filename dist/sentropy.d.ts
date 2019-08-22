export interface ISentropyClient {
    classify: (payload: ClassificationRequestPayload) => Promise<ClassificationResponsePayload>;
}
export interface ClassificationRequestPayload {
    id?: string;
    text: string;
    author: string;
    segment?: string;
}
export declare class SentropyClient implements ISentropyClient {
    private apiKey;
    private headers?;
    constructor(apiKey: string, headers?: {
        [key: string]: string;
    });
    _applyDefaultsToPayload(payload: ClassificationRequestPayload): {
        id: any;
        text: string;
        author: string;
        segment?: string;
    };
    classify(payload: ClassificationRequestPayload): Promise<ClassificationResponsePayload>;
}
export interface ClassificationResponsePayload {
    id: string;
    author: string;
    segment?: string;
    label_probabilities: {
        IDENTITY_ATTACK: number;
        SEXUAL_AGGRESSION: number;
        PHYSICAL_VIOLENCE: number;
        NEONAZISM: number;
    };
}
