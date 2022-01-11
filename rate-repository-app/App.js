import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeRouter } from 'react-router-native';
import Constants from 'expo-constants';

import createApolloClient from './utils/apolloClient';
import Main from './components/Main';
import { ApolloProvider } from '@apollo/client';

const client = createApolloClient();

const App = () => {

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={client}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;