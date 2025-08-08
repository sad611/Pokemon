import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { spacing, typography, colors } from "../../styles/global";

const TabContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.divider};
  margin: ${spacing.lg}px 0px;
`;

const TabButton = styled(TouchableOpacity)`
  padding: 0 ${spacing.lg}px ${spacing.md}px ${spacing.lg}px;
  border-bottom-width: 4px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${(props) =>
    props.active ? colors.secondary : "transparent"};
`;

const TabText = styled.Text`
  ${typography.body};
  font-weight: 600;
  text-align: center;
  color: ${(props) => (props.active ? colors.secondary : colors.textSecondary)};
`;

export default function TabSelector({ activeTab, onTabChange }) {
  return (
    <TabContainer>
      <TabButton
        active={activeTab === "info"}
        onPress={() => onTabChange("info")}
      >
        <TabText active={activeTab === "info"}>Info</TabText>
      </TabButton>
      <TabButton
        active={activeTab === "stats"}
        onPress={() => onTabChange("stats")}
      >
        <TabText active={activeTab === "stats"}>Stats</TabText>
      </TabButton>
    </TabContainer>
  );
}
