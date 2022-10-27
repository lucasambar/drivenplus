import styled from "styled-components"

import tasks from "../imagens/tasks.png"
import money from "../imagens/money.png"
import CORES from "../constantes/cores"

export default function Infos () {
    return (
    <Container>
        <Div espaço={false}>
            <div>
                <img src={tasks} alt="icone tasks rosa"/>
                <Titulo>Benefícios:</Titulo>
            </div>
            <Texto>1. Brindes exclusivos</Texto>
            <Texto>2. Materiais bônus de web</Texto>
        </Div>

        <Div espaço={true}>
            <div>
                <img src={money} alt="icone money rosa"/>
                <Titulo>Preço:</Titulo>
            </div>
            <Texto>R$ 39,99 cobrados mensalmente</Texto>
        </Div>
    </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    gap: 15px;

    margin-bottom: 35px;
    margin-top: 22px;
`
const Div = styled.div`
    width: 299px;   
    
    div{
        display: flex;
        align-items: center;
        gap: 5px;
        margin-bottom: 7px;
        padding-left: ${props => props.espaço ? "7px" : "0px"}
    }
`
const Titulo = styled.p`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color:${CORES.branco};
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color:${CORES.branco};

    display: block;
    padding-left: 7px;
`
