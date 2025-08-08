import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from '../components/List';
import styled from 'styled-components/native';
import { colors, spacing, borderRadius } from '../styles/global';

export const Pokedex = styled(SafeAreaView)`
backgroundColor: ${colors.primary};
flex: 1;
`;

export const PokedexInterior = styled.View`
backgroundColor: ${colors.secondary};
borderRadius: ${borderRadius.small}px;
margin: ${spacing.lg}px;
border: ${spacing.xs}px solid ${colors.border};
flex: 1;
`;

export default function HomeScreen({ navigation }) {
  return (

      <Pokedex>
        <StatusBar backgroundColor={colors.statusBar} barStyle="light-content" />
        <PokedexInterior>
          <List navigation={navigation} />
        </PokedexInterior>
      </Pokedex>

  );
}
