import { ApolloProvider } from '@apollo/client';
import { Route, Router, Switch } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'
import { Box } from 'theme-ui';

import { ApiDemo } from '../ApiDemo';
import { Navbar } from '../Navbar';
import { SdkDemo } from '../SdkDemo';
import { GqlDemo } from '../GqlDemo';

import { history } from '../../history';
import { theme } from '../../theme';
import { client } from '../../apollo';

export const App = () => {
  return (
    <Router history={history}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Box
            p={4}
            margin="auto"
            sx={{ maxWidth: '1280px' }}
          >
            <Navbar title="contentful.com demo" />
            <Box mt={4}>
              <Switch>
                <Route path="/api-demo" component={ApiDemo} />
                <Route path="/sdk-demo" component={SdkDemo} />
                <Route path="/graphql-demo" component={GqlDemo} />
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  );
};