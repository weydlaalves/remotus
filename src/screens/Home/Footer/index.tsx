import React from 'react';
import { Container, Wrapper,Icon} from './style';
import { Button } from '../../../components/Button';
import { Linking } from 'react-native';
  

export function Footer(){
  
    return (
      <Container>
        <Wrapper>
          <Icon>home</Icon>
          <Button
              onPress={() => Linking.openURL('https://bilinguaapp.com.br/')}
              title="Home"
              color="warning"
          /> 
        </Wrapper>

         <Wrapper> 
          <Icon>search</Icon>
          <Button
              onPress={() => Linking.openURL('https://bilinguaapp.com.br/')}
              title="Pesquisar"
              color="warning"
            />
        </Wrapper>      
        <Wrapper> 
          <Icon>explore</Icon>
            <Button
              title="Visitados"
              color="warning"
            />
        </Wrapper> 
                 
        <Wrapper> 
          <Icon>favorite</Icon>
            <Button
              title="Favoritar"
              color="warning"
            />
        </Wrapper>        
        <Wrapper>
          <Icon>face</Icon> 
            <Button
                title="Perfil"
                color="warning"
              />
        </Wrapper>
      </Container>
      )
    };

    