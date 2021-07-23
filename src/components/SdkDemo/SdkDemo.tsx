import { useEffect, useState } from "react";
import * as contentful from 'contentful';

import { Product } from "../Product";
import { ProductList } from "../ProductList";
import { config } from "../../config";

const {
  CONTENTFUL_API_TOKEN,
  CONTENTFUL_SPACE_ENVIRONMENT,
  CONTENTFUL_SPACE_ID
} = config;

/**
 * Read the reference documentation for more options on initializing the client.
 * https://contentful.github.io/contentful.js/contentful/latest/contentful.html
 */
const contentfulClient = contentful.createClient({
  accessToken: CONTENTFUL_API_TOKEN,
  environment: CONTENTFUL_SPACE_ENVIRONMENT,
  space: CONTENTFUL_SPACE_ID,
});

export const SdkDemo = () => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<any>(undefined);

  useEffect(() => {
    contentfulClient
      .getEntries()
      .then((entries) => {
        if (entries.items && entries.items.length > 0) {
          setData(entries);
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <ProductList
      loading={!data && !error}
      error={error}
    >
      {data && data.items.map(({ sys, fields }: any) => (
        <Product
          createdAt={sys.createdAt}
          description={fields.description}
          key={sys.id}
          media={fields.image.map((item: any) => item.fields.file)}
          name={fields.name}
          sx={{ height: '100%' }}
        />
      ))}
    </ProductList>
  );
}