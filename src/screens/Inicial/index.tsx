import React from 'react';
import ImgInicial from '../../assets/ImgInicial/ImgInicial';
import Logo from '../../assets/Logo/Logo';
import Google from '../../assets/Icon/Google/google';
import Facebook from '../../assets/Icon/Facebook/facebook';
import {
    Container,
    Content,
    Wrapper,
    Card,
    CardButtons,
    Text,
    Img,
    LogoRemotus,
    WrapperText,
    IconGoogle,
    IconFacebook

  } from './styles';
 
  export function Inicial() {
  
    
    return (
      <Container>
        <Content>
          <Card>
            <Img xml={ImgInicial} />
            <Wrapper>
              <LogoRemotus xml={Logo}
              opacity={150}
              />
              <WrapperText>
              <Text>Falta pouco para você encontrar um lugar para trabalhar!</Text>
            </WrapperText>
            </Wrapper>
          </Card>
          <CardButtons>
              <IconGoogle xml={Google}/>
              <Text>Continuar com o Google</Text>
              <IconFacebook xml={Facebook}/>
              <Text>Continuar com o Facebook</Text>
          </CardButtons>
        </Content>
      </Container>
    )};
  