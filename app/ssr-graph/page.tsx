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
      `http://localhost:5005/graphql?query=${encodeURIComponent(query
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
    console.log(data);
    
    return (
      <>
        {JSON.stringify(data)}
      </>
    );
  }