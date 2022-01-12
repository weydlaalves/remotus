import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';  
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
   flex:1;
   background: #0D1321;
   

`;
export const Content = styled.SafeAreaView`
   align-items:center;
   justify-content:center;
  
`;


export const Wrapper = styled.View`
   align-items:center;
   justify-content:center;
   margin-Top: -85%;

`;
export const WrapperText = styled.View`
   width: 80%;
   height: 67px;
   border-radius: 3px;
   background:#b0cb32;
   align-items:center;
   justify-content:center;
   
`;
export const Card = styled.View`
   
   

  
`;
export const CardButtons = styled.TouchableOpacity`
   
   

`;

export const Text = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px;  
`;

export const Img = styled(SvgXml).attrs({
   width: RFValue(360),
   height: RFValue(316),
})`
   

`;

export const LogoRemotus = styled(SvgXml).attrs({
   width: RFPercentage(20),
   height: RFPercentage(30),
   
})``;


export const IconGoogle = styled(SvgXml).attrs({
   width: RFPercentage(2),
   height: RFPercentage(3),
   
})``;


export const IconFacebook = styled(SvgXml).attrs({
   width: RFPercentage(2),
   height: RFPercentage(3),
   
})``;
