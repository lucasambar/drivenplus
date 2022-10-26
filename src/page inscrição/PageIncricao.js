import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import CORES from "../constantes/cores"
import UserContext from "../providers/user"
import CardPlano from "./CardPlano"

export default function PageIncricao () {
    const {token} = useContext(UserContext)
    const [planos, setPlanos] = useState({})

    console.log(planos)
    
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promessa = axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships", config)
        promessa.then(response => setPlanos(response.data))
        promessa.catch(erro => console.log(erro.response.data))
    },[token])

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