import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import UserContext from "../providers/user"
import Formulario from "./Formulario"
import Infos from "./Infos"
import Topo from "./Topo"

export default function PagePlano () {
    const params = useParams()
    const {token} = useContext(UserContext)
    const [plano, setPlano] = useState(undefined)

    useEffect(() => {
        const link = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.idPlano}`

        const config = {
             headers: {
                 "Authorization": `Bearer ${token}`
             }
         }

         const promessa = axios.get(link, config)
         promessa.then(response => setPlano(response.data))
         promessa.catch(erro => console.log(erro.response.data))
     }, [params, token])

    return (
        <Background>
                <Topo plano={plano}/> 
                <Infos/>
                <Formulario/>

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
`
