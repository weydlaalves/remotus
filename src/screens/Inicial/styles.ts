import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';  
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
   flex:1;
   
`;
export const Content = styled.SafeAreaView`
   flex:1;
   
   
  
`;


export const Wrapper = styled.View`
   align-items:center;
   justify-content:center;
   margin-Top:-375px;
   margin-left: 5px;

`;
export const WrapperText = styled.View`
   width: 80%;

`;
export const Card = styled.View`
   

  
`;
export const CardButtons = styled.View`
   

`;
export const Text = styled.Text`
   background:#b0cb32;
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px;  

`;

export const Img = styled(SvgXml).attrs({
   width: RFPercentage(55),
   height: RFPercentage(60),

})``;

export const LogoRemotus = styled(SvgXml).attrs({
   width: RFPercentage(20),
   height: RFPercentage(30),

})``;
