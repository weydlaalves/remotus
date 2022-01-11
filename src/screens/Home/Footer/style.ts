import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  height: ${RFValue(70)}px;
  flex-direction:row;
  align-items:center;
  background: #151511;
`;

export const Wrapper = styled.TouchableOpacity`
 flex:1;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  margin-left: 25px; 
  margin-top: 15px;
`;




