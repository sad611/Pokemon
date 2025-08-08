import React from 'react';
import styled from 'styled-components/native';
import { colors, spacing } from '../../styles/global';

const imageSize = 100;
const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.cardBackground};
  border-radius: 12px;
  margin: ${spacing.sm}px;
  align-items: center;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

const ImageContainer = styled.View`
  width: ${imageSize}px;
  height: ${imageSize}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ImageHighlighter = styled.View`
  width: 80%;
  height: 80%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.imageBackground};
`;
const PokemonImage = styled.Image`
  width: 80%;
  height: 80%;
  resize-mode: contain;
`;

const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: ${spacing.md}px;
`;

const NumberText = styled.Text`
  font-size: 14px;
  color: ${colors.textSecondary};
  font-weight: bold;
  margin-right: ${spacing.md}px;
`;

const NameText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.textPrimary};
  text-transform: capitalize;
`;

export default function PokemonButton({ pokemon, handlePokemonPress }) {
  const { name, id } = pokemon;

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const formatPokedexNumber = (number) => {
    if (!number) return '#---';
    return `#${String(number).padStart(3, '0')}`;
  };

  return (
    <Container onPress={() => {
      handlePokemonPress(pokemon);
    }}>
      <ImageContainer>
        <ImageHighlighter>
          <PokemonImage source={{ uri: imageUrl }} />
        </ImageHighlighter>
      </ImageContainer>

      <InfoContainer>
        <NameText>{name}</NameText>
        <NumberText>{formatPokedexNumber(id)}</NumberText>
      </InfoContainer>
    </Container>
  );
}
