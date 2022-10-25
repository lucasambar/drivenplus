import styled from "styled-components"
import CORES from "../constantes/cores"

import logo from "../imagens/logo.png"
import Formuario from "./Formulario"


export default function PageLogin () {
    return (
        <Background>
            <Img src={logo}/>
            <Formuario/>
            <Texto>Não possuí uma conta? Cadastre-se</Texto>
        </Background>
    )
}

const Background = styled.div`
    background-color: ${CORES.background};
    min-height: 100vh;
    width: 100%;

    padding-top: 134px;

    display: flex;
    flex-direction: column;
    align-items: center;
`
const Img = styled.img`
    display: block;
    margin: auto;
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};
    text-decoration: underline;

    display: block;
    margin: auto;

    cursor: pointer;
`