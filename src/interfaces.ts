import {
  ClassificationRequestPayload,
  ClassificationResponsePayload
} from "./types";

export interface ISentropyClient {
  classify: (
    payload: ClassificationRequestPayload
  ) => Promise<ClassificationResponsePayload>;
}
