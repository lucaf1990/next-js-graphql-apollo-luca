"use client";

import { GetCharactersDocument } from "@/gql/queries/getCharacters/getCharacters.rickAndMorty.generated";
import { GetSpaceXShipsDocument } from "@/gql/queries/getShips/getShips.spaceX.generated";
import { GetSpeciesDocument } from "@/gql/queries/getSpecies/getSpecies.swapi.generated";
import { useQuery } from "@apollo/client";
import { Suspense } from "react";

export default function Home() {
  const { data } = useQuery(GetSpaceXShipsDocument, {
    variables: { limit: 10, offset: 0 },
  });

  const { data: rickAndMortyCharacters } = useQuery(GetCharactersDocument, {
    variables: { page: 0 },
    context: {
      apiName: "rickAndMorty",
    },
  });

  const { data: swapiCharacters } = useQuery(GetSpeciesDocument);

  return (
    <div>
      <Suspense>
        <div style={{ display: "flex", gap: "16px" }}>
          <div>
            <h1>SpaceX</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
          <div>
            <h1>Rick and Morty</h1>
            <pre>{JSON.stringify(rickAndMortyCharacters, null, 2)}</pre>
          </div>
          <div>
            <h1>SWAPI</h1>
            <pre>{JSON.stringify(swapiCharacters, null, 2)}</pre>
          </div>
        </div>
      </Suspense>
    </div>
  );
}
