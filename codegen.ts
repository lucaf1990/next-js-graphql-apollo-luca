import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  config: {
    avoidOptionals: true,
    scalars: {
      DateTime: "string",
    },
  },
  generates: {
    "gql/__generated__/types.ts": {
      schema: [
        process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
        process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL as string,
        process.env.NEXT_PUBLIC_SWAPI_URL as string,
      ],
      plugins: ["typescript"],
    },
    spaceX: {
      schema: process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
      documents: "gql/**/*.spaceX.{gql,graphql}",
      plugins: ["typescript-operations", "typed-document-node"],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "~@/gql/__generated__/types",
      },
    },
    rickAndMorty: {
      schema: process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL as string,
      documents: "gql/**/*.rickAndMorty.{gql,graphql}",
      plugins: ["typescript-operations", "typed-document-node"],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "~@/gql/__generated__/types",
      },
    },
    swapi: {
      schema: process.env.NEXT_PUBLIC_SWAPI_URL as string,
      documents: "gql/**/*.swapi.{gql,graphql}",
      plugins: ["typescript-operations", "typed-document-node"],
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.ts",
        baseTypesPath: "~@/gql/__generated__/types",
      },
    },
  },
};

export default config;
