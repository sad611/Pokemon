import React, { useState, useEffect, useRef } from 'react';
import { BackHandler, Alert, Animated, Easing } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components/native';
import { spacing, borderRadius, typeBackground } from '../styles/global';

import { usePokemonList } from '../context/PokemonContext';

import { Pokedex, PokedexInterior } from './HomeScreen';
import PokemonHeader from '../components/pokemon/PokemonHeader';
import FloatingPokemonImage from '../components/pokemon/FloatingPokemonImage';
import PokemonDetailsPanel from '../components/pokemon/PokemonDetailsPanel';

import {
  GestureDetector,
  Gesture,
  Directions,
} from 'react-native-gesture-handler';

const DetailCard = styled.View`
  flex: 1;
  background-color: ${(props) =>
    typeBackground[props.type] || typeBackground.default};
  border-radius: ${borderRadius.small}px;
  margin: ${spacing.xs}px;
`;

const AnimatedDetailCard = styled(Animated.View)`
flex: 1;
`;

export default function DetailsScreen({ route, navigation }) {
  const { pokemon } = route.params;

  const [pokemon_, setPokemon] = useState(pokemon);
  const { pokemonList } = usePokemonList();

  const opacity = useRef(new Animated.Value(1)).current;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon_.id}.png`;

  const handleFadeAnimation = (direction) => {
    let pokemonId;
    if (direction === 'left') {
      if (pokemon_.id >= pokemonList.length) return;

      pokemonId = pokemon_.id;
    } else {
      if (pokemon_.id <= 1) return;

      pokemonId = pokemon_.id - 2;
    }

    const nextPokemon = pokemonList[pokemonId];

    if (!nextPokemon) return;

    Animated.timing(opacity, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (finished) {
        setPokemon(nextPokemon);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          easing: Easing.ease,
          useNativeDriver: true,
        }).start();
      }
    });
  };

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(() => {
      handleFadeAnimation('left');
    });

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(() => {
      handleFadeAnimation('right');
    });

  const combinedFling = Gesture.Race(flingLeft, flingRight);

  return (
    <Pokedex>
      <PokedexInterior>
        <GestureDetector gesture={combinedFling}>
          <DetailCard type={pokemon_.types[0].type.name}>
            <AnimatedDetailCard style={{ opacity }}>
              <PokemonHeader
                types={pokemon_.types}
                onGoBack={() => navigation.goBack()}
              />
              <FloatingPokemonImage imageUrl={imageUrl} />
              <PokemonDetailsPanel pokemon={pokemon_} />
            </AnimatedDetailCard>
          </DetailCard>
        </GestureDetector>
      </PokedexInterior>
    </Pokedex>
  );
}
