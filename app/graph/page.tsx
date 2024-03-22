"use client"
import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `http://localhost:5005/graphql`,
  cache: new InMemoryCache(),
});

const GET_BOOK = gql`
  query {
    books {
      id
      name
    }
  }
`;

function HomePage() {
  const { data, loading, error } = useQuery(GET_BOOK);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {data.books.map((book:any) => (
        <div key={book.id}>
          <h2>{book.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My Book Collection</h2>
        <HomePage />
      </div>
    </ApolloProvider>
  );
}
