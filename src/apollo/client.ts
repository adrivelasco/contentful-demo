import { ApolloClient, InMemoryCache } from '@apollo/client';

import { config } from '../config';

const {
  CONTENTFUL_GQL_API_BASE_URL: gqlApi,
  CONTENTFUL_SPACE_ID: spaceId,
  CONTENTFUL_SPACE_ENVIRONMENT: environment,
  CONTENTFUL_API_TOKEN: token
} = config;

export const client = new ApolloClient({
  uri: `${gqlApi}/content/v1/spaces/${spaceId}/environments/${environment}`,
  headers: {
    authorization: `Bearer ${token}`
  },
  cache: new InMemoryCache(),
});