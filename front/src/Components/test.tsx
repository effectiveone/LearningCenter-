import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_DATA = gql`
  query GetAllData {
    languages {
      id
      name
      categories {
        id
        name
        levels {
          id
          name
          questions {
            id
            text
          }
        }
      }
    }
  }
`;

const Test = () => {
  const { loading, error, data } = useQuery(GET_ALL_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Data fetched from GraphQL:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Test;
