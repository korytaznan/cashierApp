import React from 'react';
import { MainStack } from '@navigator';
import GraphqlProvider from '@graphql';
import { Provider } from 'react-redux';
import { store } from '@store';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const App = () => {
  return (
    <Provider store={store}>
      <GraphqlProvider>
        <MainStack />
      </GraphqlProvider>
    </Provider>
  );
};

export default App;
