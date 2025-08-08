import React from 'react';
import styled from 'styled-components/native';
import { colors, spacing, borderRadius, typography, colorsLight } from '../../styles/global';
import { TextInput } from 'react-native';

const SearchContainer = styled.View`
margin: ${spacing.sm}px;
`;

const SearchInput = styled(TextInput)`
  background-color: ${colors.cardBackground};
  border-radius: ${borderRadius.medium}px;
  padding: ${spacing.md}px;
  ${typography.body}
  color: ${colors.textPrimary};
  border: 1px solid ${colors.border};
`;

export default function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search Pokémon..."
        placeholderTextColor={colors.textSecondary}
        value={searchQuery}
        onChangeText={onSearchChange}
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
    </SearchContainer>
  );
}
