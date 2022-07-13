import {ApolloClient, InMemoryCache} from '@apollo/client';
import {typeDefs} from '../components/history/query';

export const apolloClient = new ApolloClient({
  uri: 'https://bode-graph.herokuapp.com/',
  cache: new InMemoryCache(),
  typeDefs,
  connectToDevTools: true,
});
