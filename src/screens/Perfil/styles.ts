import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
   flex:1;  
   
`;
export const Content = styled.View`
   align-items:center;   
   justify-content:center;
`;
export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(30)}px;
  margin-top: 29px;
  
`;
export const Usuario = styled.View`
   align-items:center;   
   justify-content:center;
`;
export const Text = styled.Text`
   font-size: ${RFValue(18)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
  
`;
export const Subtitle = styled.Text`

   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
  
`;

export const CardInfo = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0 rgba(0, 0, 0, 0.6)   
`;
export const TitleInfo = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;

     
`;
export const SubtitleInfo = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
     
   

`;
export const CardLog = styled.TouchableOpacity`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)  
    
`;
export const TitleLog = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;
     
     
`;
export const SubtitleLog = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
     
   

`;
export const CardNot = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)   
`;

export const TitleNot = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:center;
     
`;
export const SubtitleNot = styled.Text`
   font-size: ${RFValue(15)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:center;
   

`;
export const Cards = styled.View`
   width: 100%;
   height: 70%;
   margin-top:50%;
   
`;
export const CardAjuda = styled.Text`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)   
`;

export const CardSobre = styled.Text`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)   
`;



export const CardSair = styled.Text`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)   
`;