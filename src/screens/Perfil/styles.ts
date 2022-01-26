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
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${RFValue(30)}px;
  margin: 20px 20px 20px 85%;
  opacity:0.5;
  
`;
export const IconExit = styled(MaterialIcons)`
  font-size: ${RFValue(30)}px;
  margin: 20px 20px 20px 85%;
  opacity:0.5;
  color: #000;
`;
export const Usuario = styled.View`
   align-items:center;   
   justify-content:center;
`;
export const Text = styled.Text`
   font-size: ${RFValue(20)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
  
`;

export const CardInfo = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0 rgba(0, 0, 0, 0.6)   
`;
export const TitleInfo = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:left;
   margin-top:-15%;

     
`;
export const SubtitleInfo = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:left;
     
   

`;
export const CardLog = styled.View`
   width: 100%;
   height: 20%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.6)  
    
`;
export const TitleLog = styled.Text`
   font-size: ${RFValue(17)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.warning};
   text-align:left;
   margin-top:-15%;

     
     
`;
export const SubtitleLog = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:left;
     
   

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
   text-align:left;
   margin-top:-15%;
     
`;
export const SubtitleNot = styled.Text`
   font-size: ${RFValue(13)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.grey};
   text-align:left;
   

`;
export const Cards = styled.View`
   width: 100%;
   height: 70%;
   margin-top:20%;
   
`;
export const CardAjuda = styled.View`
   width: 100%;
   height: 15%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8)   
`;

export const CardSobre = styled.View`
   width: 100%;
   height: 15%;
   background: #FFFFFF;
   box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.8)   
`;
export const CardSair = styled.View`
   width: 100%;
   height: 15%;
   background: #FFFFFF;
   box-shadow:0px 0px 0px  rgba(0, 0, 0, 0.8)   
`;
export const TextSobre = styled.Text`
  margin:20px;
  margin-top:-10%;
  font-size:15px;
  opacity:0.5;
    
`;
export const TextAjuda= styled.Text`
   margin:20px;
   margin-top:-10%;
   font-size:15px;
   opacity:0.5;
    
`;
export const TextSair= styled.Text`
   margin:20px;
   font-size:15px;
   opacity:0.5;
`; 

  
    





