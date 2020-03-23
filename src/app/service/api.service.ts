/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateStatusInput = {
  id?: string | null;
  posted: string;
  content: string;
  poster: string;
  _version?: number | null;
};

export type ModelStatusConditionInput = {
  posted?: ModelStringInput | null;
  content?: ModelStringInput | null;
  poster?: ModelStringInput | null;
  and?: Array<ModelStatusConditionInput | null> | null;
  or?: Array<ModelStatusConditionInput | null> | null;
  not?: ModelStatusConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateStatusInput = {
  id: string;
  posted?: string | null;
  content?: string | null;
  poster?: string | null;
  _version?: number | null;
};

export type DeleteStatusInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelStatusFilterInput = {
  id?: ModelIDInput | null;
  posted?: ModelStringInput | null;
  content?: ModelStringInput | null;
  poster?: ModelStringInput | null;
  and?: Array<ModelStatusFilterInput | null> | null;
  or?: Array<ModelStatusFilterInput | null> | null;
  not?: ModelStatusFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateStatusMutation = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type UpdateStatusMutation = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type DeleteStatusMutation = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type SyncStatusesQuery = {
  __typename: "ModelStatusConnection";
  items: Array<{
    __typename: "Status";
    id: string;
    posted: string;
    content: string;
    poster: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetStatusQuery = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type ListStatussQuery = {
  __typename: "ModelStatusConnection";
  items: Array<{
    __typename: "Status";
    id: string;
    posted: string;
    content: string;
    poster: string;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateStatusSubscription = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnUpdateStatusSubscription = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnDeleteStatusSubscription = {
  __typename: "Status";
  id: string;
  posted: string;
  content: string;
  poster: string;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateStatus(
    input: CreateStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<CreateStatusMutation> {
    const statement = `mutation CreateStatus($input: CreateStatusInput!, $condition: ModelStatusConditionInput) {
        createStatus(input: $input, condition: $condition) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateStatusMutation>response.data.createStatus;
  }
  async UpdateStatus(
    input: UpdateStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<UpdateStatusMutation> {
    const statement = `mutation UpdateStatus($input: UpdateStatusInput!, $condition: ModelStatusConditionInput) {
        updateStatus(input: $input, condition: $condition) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateStatusMutation>response.data.updateStatus;
  }
  async DeleteStatus(
    input: DeleteStatusInput,
    condition?: ModelStatusConditionInput
  ): Promise<DeleteStatusMutation> {
    const statement = `mutation DeleteStatus($input: DeleteStatusInput!, $condition: ModelStatusConditionInput) {
        deleteStatus(input: $input, condition: $condition) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteStatusMutation>response.data.deleteStatus;
  }
  async SyncStatuses(
    filter?: ModelStatusFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncStatusesQuery> {
    const statement = `query SyncStatuses($filter: ModelStatusFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncStatuses(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            posted
            content
            poster
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncStatusesQuery>response.data.syncStatuses;
  }
  async GetStatus(id: string): Promise<GetStatusQuery> {
    const statement = `query GetStatus($id: ID!) {
        getStatus(id: $id) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetStatusQuery>response.data.getStatus;
  }
  async ListStatuss(
    filter?: ModelStatusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListStatussQuery> {
    const statement = `query ListStatuss($filter: ModelStatusFilterInput, $limit: Int, $nextToken: String) {
        listStatuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            posted
            content
            poster
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListStatussQuery>response.data.listStatuss;
  }
  OnCreateStatusListener: Observable<OnCreateStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateStatus($owner: String!) {
        onCreateStatus(owner: $owner) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateStatusSubscription>;

  OnUpdateStatusListener: Observable<OnUpdateStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateStatus($owner: String!) {
        onUpdateStatus(owner: $owner) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateStatusSubscription>;

  OnDeleteStatusListener: Observable<OnDeleteStatusSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteStatus($owner: String!) {
        onDeleteStatus(owner: $owner) {
          __typename
          id
          posted
          content
          poster
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteStatusSubscription>;
}
