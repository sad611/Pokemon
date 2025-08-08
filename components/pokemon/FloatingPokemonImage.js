import React from 'react';
import styled from 'styled-components/native';

const imageSize = 200;

const FloatingImageContainer = styled.View`
  position: relative;
  top: 60px;
  width: ${imageSize}px;
  height: ${imageSize}px;
  z-index: 20;
  align-self: center;
`;

const PokemonImage = styled.Image`
  width: 100%;
  height: 100%;

`;

export default function FloatingPokemonImage({ imageUrl }) {
  return (
    <FloatingImageContainer>
      <PokemonImage source={{ uri: imageUrl }} resizeMode="contain" />
    </FloatingImageContainer>
  );
}
