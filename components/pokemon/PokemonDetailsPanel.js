import React, { useState } from "react";
import styled from "styled-components/native";
import { spacing, borderRadius, typography } from "../../styles/global";
import {StyleSheet, Text, ScrollView, StatusBar} from 'react-native';
import ShareButton from "./ShareButton";
import TabSelector from "./TabSelector";
import PokemonInfoTab from "./PokemonInfoTab";
import PokemonStatsTab from "./PokemonStatsTab";

const DetailsPanel = styled.View`
  flex: 1;
  background-color: white;
  border-radius: ${borderRadius.small}px;
  padding: ${spacing.lg}px;
  margin: ${spacing.sm}px;
  padding-top: ${spacing.xl * 2}px;
  min-height: 200px;
  position: relative;
`;

const ContentContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const PokemonName = styled.Text`
  ${typography.h1};
  text-transform: capitalize;
  text-align: center;
`;

function PokemonDetailsPanel({ pokemon }) {
  const [activeTab, setActiveTab] = useState("info");
  
  return (
    <DetailsPanel>
      <ContentContainer>
        <PokemonName>{pokemon.name}</PokemonName>
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === "info" && <PokemonInfoTab pokemon={pokemon} />}
        {activeTab === "stats" && <PokemonStatsTab pokemon={pokemon} />}
        <ShareButton type={pokemon.types[0].type.name} pokemon={pokemon}/>
      </ContentContainer>
    </DetailsPanel>
  );
}

export default React.memo(PokemonDetailsPanel);