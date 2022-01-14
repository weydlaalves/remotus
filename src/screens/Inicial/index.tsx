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
<<<<<<< HEAD
    CardFooter,
    Text,
    TextIcon,
    TextFooter,
=======
    CardBlock,
    Text,
    TextIcon,
    TextConvidado,
    TextBlock,
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
    Img,
    LogoRemotus,
    WrapperText,
    Icon,
    IconGoogle,
    IconFacebook,
<<<<<<< HEAD
    WrapperBlock,
=======
    IconPhone,
    IconMail
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 078c952897ac3be885b99312e05769fc2e680e48
        </Content>          
      </Container>
    )};
  