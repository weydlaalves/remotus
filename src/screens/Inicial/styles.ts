import styled from 'styled-components/native';
import { SvgXml } from 'react-native-svg';  
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.SafeAreaView`
   flex:1;
   background: ${({ theme }) => theme.colors.warning};
   
`;
export const Content = styled.View`
   align-items:center;
   justify-content:center;
`;

export const Wrapper = styled.View`
   align-items:center;
   justify-content:center;
   margin-top: -85%;
   margin-bottom: 60px;
`;
export const WrapperBlock = styled.View`
   flex-direction: row;
   justify-content:center;
   margin: 10px;
   
`;

export const WrapperText = styled.View`
   width: 80%;
   height: 67px;
   border-radius: 10px;
   background:#b0cb32;
   align-items:center;
   justify-content:center;
<<<<<<< HEAD
   padding: 7px;
=======
   padding:10px;

>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
`;

export const Text = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px;  
`;

export const TextIcon = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.warning};
   padding: 10px;
   border-radius: 10px; 
  
`;
export const TextBlock = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.warning};  

`;
export const TextConvidado = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   background: ${({ theme }) => theme.colors.success};
   
`;

export const Card = styled.View`
   margin-top: 10%;
   

`;
export const CardButtons = styled.TouchableOpacity`
   flex-direction: row;
   background: ${({ theme }) => theme.colors.shape};
   align-items:center;
   justify-content:center;
   margin:  20px 0 0 0 ;
   width: ${RFValue(300)}px;
   height:${RFValue(55)}px;
   border-radius: 10px;
  

`;
export const CardIcon = styled.TouchableOpacity`
<<<<<<< HEAD
   flexDirection: row ;
   background: ${({ theme }) => theme.colors.shape};
   width: ${RFValue(140)}px;
   height:${RFValue(55)}px;
   border-radius: 10px;
   margin:10px;
   padding:20px;
   

   
  

=======
   align-items:center;
   justify-content:center;
   background: ${({ theme }) => theme.colors.shape};
   margin-bottom: 10px;
   margin-left:10px
   width: ${RFValue(150)}px;
   border-radius: 10px;
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
`;
export const CardFooter = styled.TouchableOpacity`
   flexDirection: row ;
   background: ${({ theme }) => theme.colors.success};
   width: ${RFValue(200)}px;
   height:${RFValue(40)}px;
   border-radius: 10px;
   margin:30px 0 0 0;
   justify-content: center;
   
   
   
`;

<<<<<<< HEAD
export const Text = styled.Text`
   font-size: ${RFValue(16)}px;
   font-family: ${({ theme }) => theme.fonts.bold};
   color: ${({ theme }) => theme.colors.shape};
   line-height: 19px;
   text-align: center;
   letter-spacing: 0.15px; 
    
`;
export const TextIcon = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.warning};
   width: ${RFValue(200)}px;
   height:${RFValue(40)}px;
   padding: 9px;
   border-radius: 10px;
   margin-top:-8px;
  
`;
export const TextFooter = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({ theme }) => theme.fonts.regular};
   color: ${({ theme }) => theme.colors.shape};
   justify-content:center;
   margin-top:12px;
   
=======
export const CardBlock = styled.View`
   flex-direction:row;
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
   
   
`;

export const Img = styled(SvgXml).attrs({
   width: RFValue(360),
   height: RFValue(316),
})``;
export const LogoRemotus = styled(SvgXml).attrs({
   width: RFPercentage(20),
   height: RFPercentage(30),
})``;
export const IconGoogle = styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
<<<<<<< HEAD
   

})`
   

`;


=======
})``;
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
export const IconFacebook = styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
   
})``;
export const IconPhone= styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
   
})``;
export const IconMail= styled(SvgXml).attrs({
   width: RFPercentage(3),
   height: RFPercentage(3),
})``;
export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.warning};
  font-size: ${RFValue(20)}px;
   
`;