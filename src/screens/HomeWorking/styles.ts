import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';  
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
   flex:1;
   
   
`;
export const Content = styled.View`
   align-items:center;
   justify-content:center;
`;


export const WrapperFooter = styled.View`
   flex-direction: row;
   justify-content:center;
   margin: 10px;
   
`;

export const WrapperText = styled.View`
   width: 80%;
   height: 67px;
   
`;
export const WrapperText2 = styled.View`
   width: 80%;
   height: 67px;
   
`;
export const Card = styled.View`
   align-items:center;
   justify-content:center;
   margin-Top: 10%;

`;



export const Text = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px; 
    
`;
export const Text2 = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px; 
    
`;

export const Text1 = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   justify-content:center;
   
`;

