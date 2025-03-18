import React from 'react'
import styled from 'styled-components'
import icone from '/icone.png'
import MoveSimple from '../MoveSimple'

const Content = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: 'Poppins', sans-serif;

    h1, h2 {
        margin: 0;
        padding: 0;
        color: #8400ff;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Sombra do texto */
    }

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    h2 {
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 1.5rem; /* Ajuste o tamanho da fonte do título */
        }

        h2 {
            font-size: 1.1rem; /* Ajuste o tamanho da fonte do subtítulo */
        }
    }
`;

const Sections = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-height: 30vh;
    margin: 3.5vh;
    img {
        height: 35vh;
    }
    a img{
        height: 20vh;
        margin: 2vh;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    }
`;

const Button = styled.a`
    display: inline-block;
    padding: 12px 20px;
    margin: 10px;
    text-align: center;
    font-size: 1.8rem;
    text-decoration: none;
    border-radius: 8px;
    cursor: pointer;
    width: 250px;
    font-weight: bold;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); /* Sombra nos botões */

    &:hover {
        opacity: 0.8;
        color: aliceblue;
    }
`;

const WhatsappButton = styled(Button)`
    background-color: #25D366;
    color: white;
`;

const EmailButton = styled(Button)`
    background-color: #0078D4;
    color: white;
`;

export default () => {
    return (
        <Content>
            <Sections>
                <h1>VOCÊ PRECISA DE UM SITE</h1>
                <h2>Um site para você se tornar mais</h2>
                <h1>PROFISSIONAL</h1>
            </Sections>
            <Sections>
                <MoveSimple>
                    <img src={icone} alt="" />
                </MoveSimple>
            </Sections>
            <Sections>
                <h2>Faça um orçamento agora!</h2>
                <MoveSimple>
                    <WhatsappButton href="https://wa.me/5511947047934" target="_blank">
                        WHATSAPP
                    </WhatsappButton>
                </MoveSimple>
                <MoveSimple>
                    <EmailButton href="mailto:cxtecnologic@outlook.com" target="_blank">
                        E-MAIL
                    </EmailButton>
                </MoveSimple>
            </Sections>
            <Sections>
                <h1>PROJETOS REALIZADOS</h1>
            </Sections>
            <Sections>
                <h2>DocesByVic</h2>
                <a href="https://docesbyvic.vercel.app/" target="_blank"><img src="/docesbyvic.png" alt="" /></a>
            </Sections>
        </Content>
    )
}