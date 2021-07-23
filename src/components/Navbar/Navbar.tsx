import styled from "@emotion/styled";
import { NavLink as ReactRouterNavLink } from "react-router-dom";
import { Box, Button, Flex, Text } from "theme-ui";

export interface NavbarProps {
  title: string;
}

export const Navbar = ({ title }: NavbarProps) => {
  return (
    <Box as="nav" py={4}>
      <Text as="h1" variant="heading">
        {title}
      </Text>
      <Flex mt={3}>
        <NavLink to="/api-demo">
          <Button>
            API
          </Button>
        </NavLink>
        <NavLink to="/sdk-demo">
          <Button>
            Javascript SDK
          </Button>
        </NavLink>
        <NavLink to="/graphql-demo">
          <Button>
            GraphQL
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
};

const NavLink = styled(ReactRouterNavLink)`
  position: relative;
  margin-right: 4px;

  &:last-child {
    margin-right: 0;
  }

  &.active button {
    background: #ee00ff;
`;