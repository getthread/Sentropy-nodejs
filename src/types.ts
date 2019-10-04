export type ClassificationRequestPayload = {
  id?: string;
  text: string;
  author: string;
  segment: string;
};

export type SentropyClientOpts = {
  headers?: { [key: string]: string };
};

export type ClassificationRequestOpts = {
  headers?: { [key: string]: string };
};

export type ClassificationResponsePayload = {
  id: string;
  author: string;
  segment: string;
  label_probabilities: {
    IDENTITY_ATTACK: number;
    SEXUAL_AGGRESSION: number;
    PHYSICAL_VIOLENCE: number;
    NEONAZISM: number;
  };
};
