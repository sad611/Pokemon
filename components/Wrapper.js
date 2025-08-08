import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { View } from 'react-native';

const Wrapper = styled(View)`
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
  overflow: scrollable;
  padding: 8px;
`;

export default Wrapper;