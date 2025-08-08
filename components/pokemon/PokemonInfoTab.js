import React from "react";
import styled from "styled-components/native";
import { spacing, typography, colors } from "../../styles/global";

const SizeRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${spacing.xs}px 0;
`;

const SizeItem = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${spacing.sm}px;
`;

const Divider = styled.View`
  width: 2px;
  height: 60px;
  background-color: ${colors.divider};
  margin: 0 ${spacing.md}px;
`;

const WeightHeightValue = styled.Text`
  ${typography.h1}
`;

const WeightHeightLabel = styled.Text`
  ${typography.caption}
  color: ${colors.textSecondary}
`;

export default function PokemonInfoTab({ pokemon }) {
  return (
    <SizeRow>
      <SizeItem>
        <WeightHeightValue>{pokemon.height / 10} m</WeightHeightValue>
        <WeightHeightLabel>Height</WeightHeightLabel>
      </SizeItem>
      <Divider />
      <SizeItem>
        <WeightHeightValue>{pokemon.weight / 10} kg</WeightHeightValue>
        <WeightHeightLabel>Weight</WeightHeightLabel>
      </SizeItem>
    </SizeRow>
  );
}
