import * as Types from '@/gql/__generated__/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetCharactersQueryVariables = Types.Exact<{
  page: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetCharactersQuery = { __typename?: 'Query', characters: { __typename?: 'Characters', results: Array<{ __typename?: 'Character', name: string | null } | null> | null } | null };


export const GetCharactersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCharacters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCharactersQuery, GetCharactersQueryVariables>;