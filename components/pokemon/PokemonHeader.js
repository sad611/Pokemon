import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { spacing, typography } from '../../styles/global';
import TypeBadge from './TypeBadge';
const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing.lg}px;
  z-index: 10;
`;

const TypeBadgesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xs}px;
`;

const BackButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
`;

const BackArrow = styled.Text`
  ${typography.h2}
  color: white;
  font-weight: bold;
  margin-left: -2px;
`;

export default function PokemonHeader({ types, onGoBack }) {
  return (
    <HeaderContainer>
      <BackButton onPress={onGoBack} activeOpacity={0.7}>
        <BackArrow>←</BackArrow>
      </BackButton>
      <TypeBadgesContainer>
        {types?.map((typeInfo, index) => (
          <TypeBadge key={index} type={typeInfo.type.name} />
        ))}
      </TypeBadgesContainer>
    </HeaderContainer>
  );
}
