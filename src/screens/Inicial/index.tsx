import React from 'react';
import ImgInicial from '../../assets/ImgInicial/ImgInicial';
import Logo from '../../assets/Icon/Logo/Logo';
import Google from '../../assets/Icon/Google/google';
import Facebook from '../../assets/Icon/Facebook/facebook';
import Phone from '../../assets/Icon/Phone/phone';
import Mail from '../../assets/Icon/Mail/mail';

import {
    Container,
    Content,
    Wrapper,
    Card,
    CardButtons,
    CardIcon,
    CardBlock,
    Text,
    TextIcon,
    TextConvidado,
    TextBlock,
    Img,
    LogoRemotus,
    WrapperText,
    Icon,
    IconGoogle,
    IconFacebook,
    IconPhone,
    IconMail

  } from './styles';
import phone from '../../assets/Icon/Phone/phone';
 
  export function Inicial() {
  
    
    return (
      <Container>
        <Content>
            <Img xml={ImgInicial} />
            <Wrapper>
              <LogoRemotus xml={Logo}
                opacity={150}
              />
              <WrapperText>
                <Text>Falta pouco para você encontrar um lugar para trabalhar!</Text>
              </WrapperText>
            </Wrapper>
            <Card>
              
              <CardButtons>
                <IconGoogle xml={Google}/>
                <TextIcon>Continuar com o Google</TextIcon>
              </CardButtons>
              
              < CardButtons>    
                <IconFacebook xml={Facebook}/>
                <TextIcon>Continuar com o Facebook</TextIcon>
              </CardButtons>
              
              <CardBlock>
                <CardIcon>
                  <IconPhone xml={Phone}/>
                  <TextBlock>Celular</TextBlock>
                </CardIcon>
                <CardIcon>
                  <IconMail xml={Mail}/>
                  <TextBlock>Email</TextBlock>
                </CardIcon>
              </CardBlock>
              
                <TextConvidado>Continuar como convidado</TextConvidado>
              
            </Card>       
        </Content>          
      </Container>
    )};
  