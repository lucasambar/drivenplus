import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"

import Card from "./Card"
import Topo from "./Topo"


export default function Pagina ({user}) {
    const perks = user.membership.perks
    const navigate = useNavigate()

    function Cancelar () {
        const token = JSON.parse(localStorage.getItem("token"))

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promessa = axios.delete("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", config)
        promessa.then(() => {localStorage.removeItem("user"); navigate("/subscriptions")})
        promessa.catch(erro => console.log(erro.response.data))
    }

    return (
        <>
            <Topo nome={user.name} logo={user.membership.image}/>
            <ContainerCards>
                <div>
                    {perks.map((infos) => <Card infos={infos} key={infos.id}/>)}
                </div>

                <div>
                    <Card infos={{title: "Mudar plano", link:"/subscriptions"}}/>
                    <CancelarButon onClick={Cancelar}>Cancelar plano</CancelarButon>
                </div>
            </ContainerCards>
        </>

    )
}

const ContainerCards = styled.div`
    height: calc(100vh - 140px);

    padding-top: 48px;
    padding-bottom: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {display: flex;
    flex-direction: column;
    gap: 8px;}
`

const CancelarButon = styled.div`
    height: 52px;
    width: 299px;
    left: 38px;
    top: 176px;
    border-radius: 8px;
    background-color: #FF4747;

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
