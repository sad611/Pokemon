import React from 'react';
import styled from 'styled-components/native';
import { spacing, typography, statsColor } from '../../styles/global';

const StatBarContainer = styled.View`
  margin-bottom: ${spacing.sm}px;
  height: 28px;
  justify-content: center;
`;

const StatBarRow = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const StatNameLabel = styled.Text`
  ${typography.caption}
  width: 90px;
  text-transform: uppercase;
  font-weight: bold;
`;

export const StatValueLabel = styled.Text`
  ${typography.caption}
  text-align: right;

  font-weight: bold;
  min-width: 35px;
`;

const ProgressBarTrack = styled.View`
  flex: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
  margin-horizontal: ${spacing.sm}px;
`;

const ProgressBarFill = styled.View`
  height: 100%;
  background-color: ${(props) => statsColor[props.statType] || '#B0B0B0'};
  width: ${(props) => Math.min(props.fillPercentage, 100)}%;
  border-radius: 3px;
`;

export default function StatBar({ type, statName, statValue, maxValue = 200 }) {
  const fillPercentage = (statValue / maxValue) * 100;

  return (
    <StatBarContainer>
      <StatBarRow>
        <StatNameLabel>{statName}</StatNameLabel>
        <ProgressBarTrack>
          <ProgressBarFill fillPercentage={fillPercentage} statType={type} />
        </ProgressBarTrack>
        <StatValueLabel>{statValue}</StatValueLabel>
      </StatBarRow>
    </StatBarContainer>
  );
}
