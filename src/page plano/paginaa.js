import Formulario from "./Formulario"
import Infos from "./Infos"
import Topo from "./Topo"
import back from "../imagens/back.png"

import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Conteudo ({plano}) {
    return (
        <Background>
            <Seta>
                <img src={back} alt="seta voltar"/>
            </Seta>
            <Topo plano={plano}/> 
            <Infos perks={plano.perks} preco={plano.price}/>
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
const Seta = styled.div`
    width: 100%;
    padding-left: 22px;
    padding-top: 22px;

    img{
        cursor: pointer;
    }
`
