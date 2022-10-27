import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import CORES from "../constantes/cores"
import Card from "./Card"
import Topo from "./Topo"

export default function PageHome () {
    const [plano, setPlano] = useState(undefined)
    const token = JSON.parse(localStorage.getItem("token"))
    const {user} = useContext(UserContext)
    useEffect(() => {
        const link = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions"

       const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        
        const promessa = axios.get(link, config)
        promessa.then(response => console.log(response.data))
        promessa.catch(erro => console.log(erro.response.data))
        
    }, [token])
    
    return (
        <Background>
            <Topo/>
            <ContainerCards>
                <Card/>
            </ContainerCards>
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

    padding-bottom: 10px;
`
const ContainerCards = styled.div`
    padding-top: 48px;
`