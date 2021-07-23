import axios from "axios";
import { prop } from "ramda";
import useSWR from "swr";

import { Product } from "../Product";
import { ProductList } from "../ProductList";
import { config } from "../../config";
import { getAssetFile } from "../../utils";

const {
  CONTENTFUL_API_BASE_URL: apiUrl,
  CONTENTFUL_API_TOKEN: token,
  CONTENTFUL_SPACE_ENVIRONMENT: environment,
  CONTENTFUL_SPACE_ID: spaceId
} = config;

const axiosFetcher = (url: string) =>
  axios.get(url, {
    baseURL: apiUrl,
    params: {
      access_token: token
    }
  }).then(prop('data'));

export const ApiDemo = () => {
  const { data, error } = useSWR(`/spaces/${spaceId}/environments/${environment}/entries`, axiosFetcher);

  return (
    <ProductList
      error={error?.response?.data?.message}
      loading={!data}
    >
      {data && data.items.map(({ sys, fields }: any) => (
        <Product
          createdAt={sys.createdAt}
          description={fields.description}
          key={sys.id}
          media={fields.image.map((item: any) => getAssetFile(data.includes.Asset, item.sys.id))}
          name={fields.name}
          sx={{ height: '100%' }}
        />
      ))}
    </ProductList>
  );
};