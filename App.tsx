/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ThemeProvider} from 'styled-components';
import {lightTheme} from './src/utils/theme';
import {ApolloProvider} from '@apollo/client';
import {apolloClient} from './src/services';
import RootNavigation from './src/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={lightTheme}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
