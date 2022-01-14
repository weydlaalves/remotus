import React from 'react';
import ImgInicial from '../../assets/ImgInicial/ImgInicial';
import Logo from '../../assets/Icon/Logo/Logo';
import Google from '../../assets/Icon/Google/google';
import Facebook from '../../assets/Icon/Facebook/facebook';
import {
    Container,
    Content,
    Wrapper,
    Card,
    CardButtons,
    CardIcon,
    CardFooter,
    Text,
    TextIcon,
    TextFooter,
    Img,
    LogoRemotus,
    WrapperText,
    Icon,
    IconGoogle,
    IconFacebook,
    WrapperBlock,

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
            <CardButtons>
              <IconGoogle xml={Google}/>
              <TextIcon>Continuar com o Google</TextIcon>
            </CardButtons>
            <CardButtons>    
                <IconFacebook xml={Facebook}/>
                <TextIcon>Continuar com o Facebook</TextIcon>
            </CardButtons>
            <WrapperBlock>
              <CardIcon>
                  <Icon name='phone'/>
                  <TextIcon>Celular</TextIcon>
              </CardIcon>
              <CardIcon>
                  <Icon name='mail'/>
                  <TextIcon>Email</TextIcon>
              </CardIcon>
            </WrapperBlock> 
            <CardFooter>
                  
                  <TextFooter>Continuar como convidado</TextFooter>
            </CardFooter>
           
          </Card>       
        </Content>          
      </Container>
    )};
  