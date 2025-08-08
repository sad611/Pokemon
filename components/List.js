import * as React from 'react';
import { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { usePokemonList } from '../context/PokemonContext';
import styled from 'styled-components/native';
import SearchBar from './common/SearchBar';
import PokemonButton from './pokemon/PokemonButton'

const ListContainer = styled.View`
flex: 1
`;

export default function List({ navigation }) {
  const { pokemonList } = usePokemonList();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPokemonList = useMemo(() => {
    if (!searchQuery.trim()) {
      return pokemonList;
    }
    const query = searchQuery.toLowerCase();
    return pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query)
    );
  }, [pokemonList, searchQuery]);

  return (
    <ListContainer>
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <FlatList
        data={filteredPokemonList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PokemonButton
            pokemon={item}
            handlePokemonPress={(pokemon) => {
              navigation.navigate('Details', {
                pokemon: pokemon,
              });
            }}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      />
    </ListContainer>
  );
}
