import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"

import logo from "../imagens/logo.png"
import Formuario from "./Formulario"


export default function PageLogin () {
    const navigate = useNavigate()
    
    const token = JSON.parse(localStorage.getItem("token"))

    useEffect(() => {
        if (token) {navigate("/home")}
      },[token, navigate])
    return (
        <Background>
            <img src={logo} alt="logo"/>
            <Formuario/>
            
            <Link to="/sign-up">
                <Texto>Não possuí uma conta? Cadastre-se</Texto>
            </Link>

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

    margin-top: 24px;
`