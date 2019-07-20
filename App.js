import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import deviceStorage from './src/deviceStorage';

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const custom = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#003D79',
    accent: '#FFB700',
  },
};

export default function App() {
  return (
    <PaperProvider theme={custom}>
      <MainNavigator />
    </PaperProvider>
  );
}
