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
