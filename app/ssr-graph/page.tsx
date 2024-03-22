import { Suspense } from "react";

async function GET_BOOK() {
    const query = `
    query {
      books {
        id
        name
        author {
            id
            name
        }
      }
    }
      `;
     
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}?query=${encodeURIComponent(query
      )}`,
      {
        method: "GET",
        
        next: {
          revalidate: 0,
        },
      }
    );
  
    const { data } = await res.json();

    return data;
}

export default async function BookList() {
    const data = await GET_BOOK();

    
    return (
      <>
        {JSON.stringify(data)}
        </>
    );
  }