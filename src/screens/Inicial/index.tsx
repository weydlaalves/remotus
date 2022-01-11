import React from 'react';
import ImgInicial from '../../assets/ImgInicial/ImgInicial';
import Logo from '../../assets/Logo/Logo';
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
            </Wrapper>
            <WrapperText>
              <Text>Falta pouco para você encontrar um lugar para trabalhar!</Text>
            </WrapperText>
          </Card>
            <Wrapper>
              
            </Wrapper>
          
          <CardButtons>
          </CardButtons>
        </Content>
      </Container>
    )};
  