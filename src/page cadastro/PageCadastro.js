import { Link } from "react-router-dom";
import styled from "styled-components";
import CORES from "../constantes/cores";
import Formuario from "./Formulario";

export default function PageCadastro() {
    return (
        <Background>
            <Formuario/>

            <Link to="/">
                <Texto>Já possuí uma conta? Entre</Texto>
            </Link>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${CORES.background};

    padding-top: 147px;

    display: flex;
    flex-direction: column;
    align-items: center;
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

    margin-top: 24px;

    cursor: pointer;
`