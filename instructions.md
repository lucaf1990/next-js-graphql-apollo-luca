CONFIGURATION 

INSTALL APOLLO 

npm install @apollo/client graphql

********************************

Endpoint links to be configured in the .env file

********************************

Based on client config, I would consider adding an api and managing endpoints there.


Create corresponding HttpLinks for each endpoint:

// gql/ApolloWrapper.tsx

"use client";

import { HttpLink } from "@apollo/client";

const spaceXLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SPACEX_API_URL,
});
const rickAndMortyLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL,
});
const swapiLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_SWAPI_URL });

********************************


Create a special helper that will do all the heavy lifting of link management.

type LinkConditionPair = {
  condition: (operation: Operation) => boolean;
  link: HttpLink;
};

function getApolloLink(pairs: LinkConditionPair[]): ApolloLink {
  if (pairs.length === 1) {
    return pairs[0].link;
  } else {
    const [firstPair, ...restPairs] = pairs;
    return ApolloLink.split(
      firstPair.condition,
      firstPair.link,
      getApolloLink(restPairs)
    );
  }
}

**********************************

configure the CLIENT 


// gql/ApolloWrapper.tsx

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: getApolloLink([
    {
      condition: (operation: Operation) =>
        operation.getContext().apiName === "spaceX",
      link: spaceXLink,
    },
    {
      condition: (operation: Operation) =>
        operation.getContext().apiName === "rickAndMorty",
      link: rickAndMortyLink,
    },
    {
      condition: () => true,
      link: swapiLink,
    },
  ]),
});


**************************************

Next, for each operation, we check its context to pass in the hook, The condition of the last pair should always return true, making it our default condition. This condition will be called if no context is provided for useMutation or useQuery.

Here we are checking the context, but you can also check for the occurrence of a substring in the operationName, for example:

{
   condition: (operation: Operation) => 
      operation.operationName.toLowerCase().includes('spacex'),
   link: spaceXLink,
}

That frees us from explicitly setting a context for each “non-default” operation.

However, you have to be sure that your operation name includes that substring. So instead of naming your query GetShips you have to name it something like GetSpaceXShips. Additionally, it’s important to name your operations because if you don’t, the operationName would be null.


https://github.com/apollographql/apollo-client/issues/84#issuecomment-557400283


















DEMOSTARTION 

// gql/ApolloWrapper.tsx

"use client";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  Operation,
} from "@apollo/client";

const spaceXLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SPACEX_API_URL,
});
const rickAndMortyLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL,
});
const swapiLink = new HttpLink({ uri: process.env.NEXT_PUBLIC_SWAPI_URL });

type LinkConditionPair = {
  condition: (operation: Operation) => boolean;
  link: HttpLink;
};

function getApolloLink(pairs: LinkConditionPair[]): ApolloLink {
  if (pairs.length === 1) {
    return pairs[0].link;
  } else {
    const [firstPair, ...restPairs] = pairs;
    return ApolloLink.split(
      firstPair.condition,
      firstPair.link,
      getApolloLink(restPairs)
    );
  }
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: getApolloLink([
    {
      condition: (operation: Operation) => {
        console.log(operation.operationName);
        return operation.operationName.toLocaleLowerCase().includes("spacex");
      },
      link: spaceXLink,
    },
    {
      condition: (operation: Operation) =>
        operation.getContext().apiName === "rickAndMorty",
      link: rickAndMortyLink,
    },
    {
      condition: () => true,
      link: swapiLink,
    },
  ]),
});

export const ApolloWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

Now you can use it in components:

With context:

const { data } = useQuery(..., { context: { apiName: 'rickAndMorty' } });

the context field name should be the same as what we are comparing in our client config, and the value should be similar to the options we defined. 

Now can work with multiple GraphQL endpoints.

However, I need to mention that all of these approaches should be considered “hacky” solutions, and their usage could lead to some unexpected optimization and caching issues.

I have used an approach with context for the production project and haven’t seen any noticeable issues. But you never know.
Automatic type generation

For automatic type generation, we are going to use @graphql-codegen/cli and some presets:

npm install @graphql-codegen/cli @graphql-codegen/client-preset @graphql-codegen/near-operation-file-preset @graphql-codegen/typed-document-node --save-dev

Firstly, let me explain my needs and the approach I chose for the type generation:

    I’m all about keeping my logical entities in tip-top shape. Gotta have everything neatly organized in one folder for easy navigation and code understandability. I’ve seen and tried approaches where generated types and documents are placed in one file, but that’s just not my cup of tea. So, we gotta put our heads together and figure out a way to generate our types right alongside our queries. Lucky for us, we’ve got this little tool called @graphql-codegen/near-operation-file-preset. It’s gonna make our lives so much easier
    I am going to use generated and type-safe DocumentNodes. So we need to generate not only the types themselves but also DocumentNodes and pass them as arguments. @graphql-codegen/typed-document-node is here to help us with that “problem”.

Now we need to create codegen.ts file at your project’s root.

You also may find config references with .yml, .json, and .js extensions, but as for the latest documentation it is better to use ts extension.
Also, I want to use .env.local variables in my config and additional typing.

Here is how my codegen.ts looks:

// codegen.ts

import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  config: {
    avoidOptionals: true,
    scalars: {
      DateTime: 'string',
    },
  },
  generates: {
    'gql/__generated__/types.ts': {
      schema: [
        process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
        process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL as string,
        process.env.NEXT_PUBLIC_SWAPI_URL as string,
      ],
      plugins: ['typescript'],
    },
    spaceX: {
      schema: process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
      documents: 'gql/**/*.spaceX.{gql,graphql}',
      plugins: ['typescript-operations', 'typed-document-node'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@/gql/__generated__/types',
      },
    },
    rickAndMorty: {
      schema: process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL as string,
      documents: 'gql/**/*.rickAndMorty.{gql,graphql}',
      plugins: ['typescript-operations', 'typed-document-node'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@/gql/__generated__/types',
      },
    },
    swapi: {
      schema: process.env.NEXT_PUBLIC_SWAPI_URL as string,
      documents: 'gql/**/*.swapi.{gql,graphql}',
      plugins: ['typescript-operations', 'typed-document-node'],
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        baseTypesPath: '~@/gql/__generated__/types',
      },
    },
  },
};

export default config;

Let me explain what is going on here.

Commonly, with one endpoint, we can use the default reference from the docs and play around with presets, preset configurations, plugins, etc.

import { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'http://localhost:4000/graphql',
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/': {
      preset: 'client'
    }
  }
}
 
export default config

Here we have a single schema, the rule for documents we want to check, and the generates object that holds the path for our generated types and additional configurations.

The main trick is to specify the schema not at the top level but for each individual generated field.

Let’s go through those fields and their values:

'gql/__generated__/types.ts': {
  schema: [
    process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
    process.env.NEXT_PUBLIC_RICK_AND_MORTY_API_URL as string,
    process.env.NEXT_PUBLIC_DEXAPI_URL as string,
  ],
  plugins: ['typescript'],
}

Here, the key specifies the destination file where the types for all endpoints will be stored. In that types.ts, such things as result, data, mutation types, and query types are generated. Also, “reference” types such as Maybe, Exact, Incremental, built-in and custom scalars are created. Why do I call them "reference"? Because we are going to use those types in our other generated files.

spaceX: {
  schema: process.env.NEXT_PUBLIC_SPACEX_API_URL as string,
  documents: 'gql/**/*.spaceX.{gql,graphql}',
  plugins: ['typescript-operations', 'typed-document-node'],
  preset: 'near-operation-file',
  presetConfig: {
    extension: '.generated.ts',
    baseTypesPath: 'gql/__generated__/types',
  },
},

For the specific endpoint case, we are not going to use some path as a key. You can use any name you want, it doesn’t matter. I am using the same name as the document extension.

Here we also specify the schema, but only for the needed endpoint. It’s simple.

Now let’s jump into the interesting part. For these documents, we need to specify the documents we want to check and generate. We need to explicitly differentiate between different gql files for different endpoints. I chose to use file extensions. But you can place queries and mutations that are going to use the same endpoint into one folder and then specify it in the documents:

documents: 'gql/spaceX/*.{gql,graphql}'

As I mentioned earlier, I want to use generated DocumentNodes, so here we have our plugin ‘typed-document-node’ to do the job.
‘near-operation-file’ tells our generator that we want to keep the generated files in the same place as our gql files.

In the presetConfig I specify the extension for the generated file, in my case — ‘.generated.ts’.

And, as I said, we need to define where those “reference” types should come from and that is our previously generated types.ts file.

That’s basically everything that we needed for the configuration. However, it won’t work with the default npm run graphql-codegen script. Why? Because we need to let it know where our .env variables are hiding.

Just add the following script to the package.json:

"generate": "DOTENV_CONFIG_PATH=./.env.local graphql-codegen --config codegen.ts -r dotenv/config"