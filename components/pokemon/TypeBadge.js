import React from 'react';
import styled from 'styled-components/native';
import { typeBadge, typography, borderRadius } from '../../styles/global';

const TypeBadgeContainer = styled.View`
  background-color: ${(props) => typeBadge[props.pokemonType] || typeBadge.default};
  border-radius: ${borderRadius.small}px;
  padding-horizontal: 12px;
  padding-vertical: 6px;
  margin: 4px;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 60px;
`;

const TypeLabel = styled.Text`
  ${typography.caption}
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;

export default function TypeBadge({ type }) {
  return (
    <TypeBadgeContainer pokemonType={type}>
      <TypeLabel>{type}</TypeLabel>
    </TypeBadgeContainer>
  );
}
