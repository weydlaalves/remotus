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
    Text,
    Card,
    Text1,
    WrapperText,
    WrapperText2,
    Text2,
    WrapperFooter,

  
  } from './styles';
 
  export function HomeWorking() {
  
    return (
      <Container>
            <Content> 
                <WrapperText>
                    <Text>Bom trabalho, remoter :)</Text>
                </WrapperText>
                <Card>
                    <Text1>
                        Café Patriota

                    </Text1>

                </Card>
                <WrapperText2>
                    <Text2>Você também pode gostar:</Text2>
                </WrapperText2>
                <WrapperFooter></WrapperFooter>
            </Content>
            
        
        </Container>    
              
             
       
    )};
  