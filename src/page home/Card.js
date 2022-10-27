import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Card () {
    return <Div>Solicitar brindes</Div>
}

const Div = styled.a`
    height: 52px;
    width: 299px;
    left: 38px;
    top: 176px;
    border-radius: 8px;
    background-color: ${CORES.botoes};

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    cursor: pointer;
`