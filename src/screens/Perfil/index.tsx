import React from 'react';
import {Footer} from '../Home/Footer/';

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
    Icon
} from './styles';


export function Perfil(){

    return(
        <Container>
            <Content>
                <Usuario>
                    <Text>
                        Samuel Vieira
                    </Text>
                </Usuario>
                <Cards>
                    <CardInfo>
                        <TitleInfo>Informações Pessoais</TitleInfo>
                        <SubtitleInfo>foto do perfil,nome,data de nasc...</SubtitleInfo>
                    </CardInfo>
                    <CardLog>
                        <TitleLog>Login e segurança</TitleLog>
                        <SubtitleLog>email,alterar senha,</SubtitleLog>
                    </CardLog>
                    <CardNot>
                        <TitleNot>Notificações</TitleNot>
                        <SubtitleNot>email,alterar senha,</SubtitleNot>
                    </CardNot>
                    <CardSobre>Sobre</CardSobre>
                    <CardAjuda>Ajuda</CardAjuda>
                    <CardSair>Sair</CardSair>
                </Cards>
            </Content>
        </Container>
        

    
    )

}