import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.CONTENTFUL_API_URI_CA,
});

interface ContentfulGraphQLHeader {
  authorization: string | undefined;
}

const getContentfulHeaders = (): ContentfulGraphQLHeader => {
  return {
    authorization: `Bearer ${process.env.CONTENTFUL_DELIVERY_KEY_CA}`,
  };
};
const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // ...getContentfulHeaders(),
      authorization: 'Bearer tFIb7YhzNnlGnW8cdbQ1MUBwDjLRTUvG5bQkkR-HYUQ',
    },
  };
});

export const contentfulClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
