import { Children } from "react";
import { Box, BoxProps, Flex, Spinner } from "theme-ui";

export interface ProductListProps extends BoxProps {
  error: string;
  loading: boolean;
}

export const ProductList = ({ children, loading, error, sx, ...props }: ProductListProps) => {
  if (loading || error) {
    return (
      <Flex
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px',
          ...sx
        }}
      >
        {error
          ? error ?? 'Failed to fetch data from Contentful'
          : <Spinner />
        }
      </Flex>
    );
  }

  return (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',

        '& > *': {
          width: '33.3%'
        },
        ...sx
      }}
      {...props}
    >
      {children && Children.map(children, (child) => (
        <Box
          pb={3}
          pr={3}
          sx={{
            '&:nth-child(3n)': {
              paddingRight: 0
            }
          }}
        >
          {child}
        </Box>
      ))}
    </Flex>
  );
};