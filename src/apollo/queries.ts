import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query {
    productCollection {
      items {
        name,
        description,
        sys {
          id,
          publishedAt
        },
        imageCollection {
          items {
            url
          }
        }
      }
    }
  }`;