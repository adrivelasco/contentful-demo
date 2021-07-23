import moment from "moment";
import { AspectRatio, Box, Card, Heading, Text, Image, Flex, BoxProps } from "theme-ui";
import { Gallery } from "../Gallery";

export interface Asset {
  url: string;
}

export interface ProductProps extends BoxProps {
  createdAt: string;
  description: string;
  media?: Asset[];
  name: string;
}

export const Product = ({
  createdAt,
  description,
  media = [],
  name,
  sx = {},
  ...props
}: ProductProps) => {
  return (
    <Card
      {...props}
      sx={{
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, .1)',
        ...sx
      }}
    >
      <Flex
        mb={3}
        px={3}
        py={2}
        sx={{ height: 70, overflow: 'hidden', alignItems: 'center' }}
      >
        <Heading as='h4' sx={{ width: '100%' }}>
          {name}
        </Heading>
      </Flex>
      <Gallery>
        {media.map((item: any, i) => (
          <Box
            key={i}
            sx={{ width: '100%' }}
          >
            <AspectRatio
              ratio={16/9}
              sx={{ width: '100%', textAlign: 'center' }}
            >
              <Image
                src={item.url}
                alt={name}
                sx={{ maxHeight: '100%'}}
              />
            </AspectRatio>
          </Box>
        ))}
      </Gallery>
      <Box
        mt={3}
        pb={4}
        pt={2}
        px={3}
      >
        <Text sx={{ fontSize: 1 }} as="p" mb={3} color="gray">
          Published at {moment(createdAt).format('MM/DD/YYYY')}
        </Text>
        <Text as="p" sx={{ fontSize: 1 }}>
          {description}
        </Text>
      </Box>
    </Card>
  );
};