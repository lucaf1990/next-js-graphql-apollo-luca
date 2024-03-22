import * as Types from '@/gql/__generated__/types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetSpeciesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetSpeciesQuery = { __typename?: 'Root', allSpecies: { __typename?: 'SpeciesConnection', species: Array<{ __typename?: 'Species', name: string | null } | null> | null } | null };


export const GetSpeciesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSpecies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allSpecies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"species"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetSpeciesQuery, GetSpeciesQueryVariables>;