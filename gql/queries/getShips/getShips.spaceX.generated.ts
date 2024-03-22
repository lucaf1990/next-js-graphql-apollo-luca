import * as Types from '@/gql/__generated__/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetSpaceXShipsQueryVariables = Types.Exact<{
  limit: Types.InputMaybe<Types.Scalars['Int']['input']>;
  offset: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetSpaceXShipsQuery = { __typename?: 'Query', ships: Array<{ __typename?: 'Ship', name: string | null } | null> | null };


export const GetSpaceXShipsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpaceXShips"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetSpaceXShipsQuery, GetSpaceXShipsQueryVariables>;