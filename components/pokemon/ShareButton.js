import React from 'react';
import { Share, Alert } from 'react-native';
import {
  colors,
  typeBackground,
  typography,
  borderRadius,
  spacing,
} from '../../styles/global';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  padding: ${spacing.sm}px ${spacing.lg}px;
  bottom: 0;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius.small}px;
  background-color: ${(props) =>
    typeBackground[props.type] || typeBackground.default}
`;

const ShareText = styled.Text`
${typography.h2}
color: white;
`;

export default function ShareButton({ type, pokemon }) {
  const handleShare = async () => {
    try {
      const typeNames = pokemon.types.map((t) => t.type.name).join(', ');

      const statsString = pokemon.stats
        .map((statInfo) => {
          const statName = statInfo.stat.name;
          return `${statName}: ${statInfo.base_stat}`;
        })
        .join('\n');

      const shareContent = {
        message:
          `Olha só esse ${pokemon.name}!\n\n` +
          `Tipo: ${typeNames}\n` +
          `Altura: ${pokemon.height / 10}m\n` +
          `Peso: ${pokemon.weight / 10}kg\n\n` +
          `--- Stats ---\n${statsString}\n\n` +
          `https://pokemondb.net/pokedex/${pokemon.name}`,

        title: `${pokemon.name} - Pokemon Details`,
        url: `https://pokemondb.net/pokedex/${pokemon.name}`,
      };

      const result = await Share.share(shareContent);
    } catch (error) {
      Alert.alert('Error', 'Não foi possivel compartilhar esse pokemon. Tente novamente');
    }
  };

  return (
    <Container type={type} onPress={handleShare}>
      <ShareText>Compartilhar</ShareText>
    </Container>
  );
}
