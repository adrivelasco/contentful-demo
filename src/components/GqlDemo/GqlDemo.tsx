import { useQuery } from "@apollo/client";

import { Product } from "../Product";
import { ProductList } from "../ProductList";
import { GET_PRODUCTS } from "../../apollo";

export const GqlDemo = () => {
  const { data, error, loading } = useQuery(GET_PRODUCTS);

  return (
    <ProductList
      error={error?.message as string}
      loading={loading}
    >
      {data && data.productCollection?.items.map(({ description, name, sys, imageCollection }: any) => (
        <Product
          createdAt={sys.publishedAt}
          description={description}
          key={sys.id}
          media={imageCollection?.items.map((item: any) => item)}
          name={name}
          sx={{ height: '100%' }}
        />
      ))}
    </ProductList>
  );
};