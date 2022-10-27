import Formulario from "./Formulario"
import Infos from "./Infos"
import Topo from "./Topo"
import back from "../imagens/back.png"

import styled from "styled-components"
import CORES from "../constantes/cores"
import { useNavigate } from "react-router-dom"


export default function Conteudo ({plano}) {
    const navigate = useNavigate()

    return (
        <Background>
            <Seta>
                <img src={back} alt="seta voltar" onClick={() => navigate("/subscriptions")}/>
            </Seta>
            <Topo plano={plano}/> 
            <Infos perks={plano.perks} preco={plano.price}/>
            <Formulario id={plano.id}/>
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
const Seta = styled.div`
    width: 100%;
    padding-left: 22px;
    padding-top: 22px;

    img{
        cursor: pointer;
    }
`
