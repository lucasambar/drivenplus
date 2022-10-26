import axios from "axios"
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import CORES from "../constantes/cores"
import UserContext from "../providers/user"
import CardPlano from "./CardPlano"

export default function PageIncricao () {
    const {token} = useContext(UserContext)
    const [planos, setPlanos] = useState(undefined)

    console.log(planos)
    
    useEffect(() => {
        console.log(token)

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
                {planos ? planos.map(infos => <CardPlano infos={infos}/>) : <p>oi</p>}
            </Container>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${CORES.background};

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 30px;
    padding-bottom: 10px;
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
const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    padding-top: 20px;
`