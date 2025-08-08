import React from "react";
import styled from "styled-components/native";
import { StatNameLabel, StatValueLabel } from "./StatBar";
import { spacing, typography } from "../../styles/global";
import StatBar from "./StatBar";
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';

const StatsColumn = styled(ScrollView)`
  flex: 1;
`;

const StatsHeader = styled.View`
  align-items: flex-start;
  margin-bottom: ${spacing.xs}px;
`;

const StatsHeaderText = styled.Text`
  ${typography.body}
  font-weight: bold;
`;

const StatsContainer = styled.View`
  flex: 1;
  margin-top: ${spacing.xs}px;
`;

const Total = styled.View`
  flex: 1;
  flex-direction: row;
`;

export default function PokemonStatsTab({ pokemon }) {
  const { stats } = pokemon;
  const total = stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return (
    <StatsColumn>
      <StatsHeader>
        <StatsHeaderText>Base Stats</StatsHeaderText>
      </StatsHeader>
      <StatsContainer>
        <StatBar
          statName={"hp"}
          type={stats[0].stat.name}
          statValue={stats[0].base_stat}
          maxValue={200}
        />
        <StatBar
          statName={"attack"}
          type={stats[1].stat.name}
          statValue={stats[1].base_stat}
          maxValue={200}
        />
        <StatBar
          statName={"defense"}
          type={stats[2].stat.name}
          statValue={stats[2].base_stat}
          maxValue={200}
        />
        <StatBar
          statName={"sp. attack"}
          type={stats[3].stat.name}
          statValue={stats[3].base_stat}
          maxValue={200}
        />
        <StatBar
          statName={"sp. defense"}
          type={stats[4].stat.name}
          statValue={stats[4].base_stat}
          maxValue={200}
        />
        <StatBar
          statName={"speed"}
          type={stats[5].stat.name}
          statValue={stats[5].base_stat}
          maxValue={200}
        />
        <Total>
          <StatNameLabel>Total</StatNameLabel>
          <StatValueLabel>{total}</StatValueLabel>
        </Total>
      </StatsContainer>
    </StatsColumn>
  );
}
