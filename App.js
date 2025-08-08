import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PokemonProvider from './context/PokemonContext';
import AppNavigator from './navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <PokemonProvider>
        <AppNavigator />
      </PokemonProvider>
    </SafeAreaProvider>
  );
};

export default App;
