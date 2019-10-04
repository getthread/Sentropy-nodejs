import {
  ClassificationRequestPayload,
  ClassificationResponsePayload,
  ClassificationRequestOpts
} from "./types";

export interface ISentropyClient {
  classify: (
    payload: ClassificationRequestPayload,
    opts?: ClassificationRequestOpts
  ) => Promise<ClassificationResponsePayload>;
}
