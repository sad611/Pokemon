import { useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import { Pokedex } from './HomeScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { typography, spacing } from '../styles/global';
import { Animated, Easing } from 'react-native';

const POKEBALL_SIZE = 100;
const BORDER_WIDTH = 5;
const BAND_HEIGHT = 5;
const BUTTON_SIZE = 30;
const BUTTON_BORDER_WIDTH = 5;

const LoadingContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content:center;
`;

const PokeballCircle = styled.View`
  height: ${POKEBALL_SIZE}px;
  width: ${POKEBALL_SIZE}px;
  border-radius: ${POKEBALL_SIZE / 2}px;
  overflow: hidden;
  border: ${BORDER_WIDTH}px solid black;
`;

const PokeballMiddleBand = styled.View`
  position: absolute;
  width: 100%;
  height: ${BAND_HEIGHT}px;
  background-color: black;
  top: ${POKEBALL_SIZE / 2 - BAND_HEIGHT / 2 - BORDER_WIDTH}px;
`;

const PokeballButton = styled.View`
  position: absolute;
  width: ${BUTTON_SIZE}px;
  height: ${BUTTON_SIZE}px;
  border-radius: ${BUTTON_SIZE / 2}px;
  background-color: white;
  border: ${BUTTON_BORDER_WIDTH}px solid black;
  top: ${POKEBALL_SIZE / 2 - BUTTON_SIZE / 2 - BORDER_WIDTH}px;
  left: ${POKEBALL_SIZE / 2 - BUTTON_SIZE / 2 - BORDER_WIDTH}px;
`;

const LoadingText = styled.Text` 
  ${typography.caption}
  color: white;
  width: 100%;
  text-align: center;
  padding: ${spacing.md}px;
`;

export default function LoadingScreen() {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Pokedex>
      <LoadingContainer>
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <PokeballCircle>
            <LinearGradient
              colors={['#ef4444', '#ef4444', 'white', 'white']}
              locations={[0, 0.5, 0.5, 1]}
              style={{ flex: 1 }}
            />
            <PokeballMiddleBand />
            <PokeballButton />
          </PokeballCircle>
        </Animated.View>
        <LoadingText>Loading . . .</LoadingText>
      </LoadingContainer>
    </Pokedex>
  );
}
