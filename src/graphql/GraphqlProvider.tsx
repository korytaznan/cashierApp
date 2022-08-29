import React from 'react';
import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache, ApolloLink } from '@apollo/client';
import { API_URI } from '@const';
import { FC } from 'react';
import { onError } from '@apollo/client/link/error';
import { useSelector } from 'react-redux';
import { RootState } from '@store';

const cache = new InMemoryCache();
const errorLink = onError(({ graphQLErrors, networkError, response, operation }) => {
  if (graphQLErrors) {
    for (const error of graphQLErrors) {
      console.error(
        `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
        operation,
        response,
      );
    }
  }
  if (networkError) {
    console.error(
      `[Network error]: ${networkError}`,
      'operation:',
      operation,
      'response: ',
      response,
    );
  }
});

const createHttpLink = (_token: string | null) => {
  const headers = _token?.length
    ? {
        Authorization: `Bearer ${_token}`,
      }
    : undefined;
  return new HttpLink({
    uri: API_URI,
    headers,
  });
};

const createClient = (_link: HttpLink) => {
  return new ApolloClient({
    cache,
    link: ApolloLink.from([errorLink, _link]),
    connectToDevTools: true,
    assumeImmutableResults: true,
  });
};

type IPropsGraphqlProvider = {
  children?: React.ReactNode | React.ReactNode[];
};
export const GraphqlProvider: FC<IPropsGraphqlProvider> = ({ children }) => {
  const { session } = useSelector((store: RootState) => store);
  const link = createHttpLink(session.token);
  const client = createClient(link);
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
