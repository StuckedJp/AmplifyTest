import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Status {
  readonly id: string;
  readonly posted: string;
  readonly content: string;
  readonly poster: string;
  constructor(init: ModelInit<Status>);
  static copyOf(source: Status, mutator: (draft: MutableModel<Status>) => MutableModel<Status> | void): Status;
}