import styled from "styled-components"
import CORES from "../constantes/cores"
import CardPlano from "./CardPlano"

export default function PageIncricao () {
    return (
        <Background>
            <Texto>Escolha seu Plano</Texto>
            <Container>
                <CardPlano/>
            </Container>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${CORES.background};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 30px;
`

const Texto = styled.div`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    display: block;
`
const Container = styled.div``