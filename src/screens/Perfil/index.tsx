import React from 'react';
import {Footer} from '../Home/Footer/';
import { TouchableOpacity } from 'react-native-gesture-handler';


import {
    Container,
    Content,
    Usuario,
    Text,
    Cards,   
    CardInfo,  
    TitleInfo,
    SubtitleInfo,
    CardLog,
    TitleLog,
    SubtitleLog, 
    CardNot,
    TitleNot,
    SubtitleNot,
    CardSobre,
    CardAjuda,
    CardSair,
    TextSobre,
    TextAjuda,
    TextSair,   
    Icon,
    IconExit
} from './styles';


export function Perfil(){

    return(
        
        <Container>
            
            <Content>
                <Usuario>
                    <IconExit name='exit-to-app' color="black"/>
                    <Text>
                        Samuel Vieira
                    </Text>
                </Usuario>
                <Cards>
                    
                    <CardInfo>

                        
                        <Icon name='keyboard-arrow-right'/>
                        <TitleInfo>Informações Pessoais</TitleInfo>
                        <SubtitleInfo>foto do perfil,nome,data de nasc...</SubtitleInfo>
                    </CardInfo>
                    <CardLog>
                        <Icon name='keyboard-arrow-right'/>
                        <TitleLog>Login e segurança</TitleLog>
                        <SubtitleLog>email,alterar senha,</SubtitleLog>
                    </CardLog>
                    <CardNot>
                        <Icon name='keyboard-arrow-right'/> 
                        <TitleNot>Notificações</TitleNot>
                        <SubtitleNot>email,alterar senha,</SubtitleNot>
                    </CardNot>
                    <CardSobre>
                        <Icon name='keyboard-arrow-right'/>
                        <TextSobre>Sobre</TextSobre>
                    </CardSobre>
                    <CardAjuda>
                        <Icon name='keyboard-arrow-right'/>
                        <TextAjuda>Ajuda</TextAjuda>
                    </CardAjuda>
                    <CardSair>
                        <TextSair>Sair</TextSair>
                    </CardSair>
                </Cards>
                <Footer></Footer>
               
            </Content>
            
        </Container>
        
        

    
    )

}