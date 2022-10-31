import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import back from "../imagens/back.png"
import Formulario from "./Formulario"


export default function PageUpdate () {
    const navigate = useNavigate()
    const params = useParams()

    return (
        <Background>
            <Seta>
                <img src={back} alt="seta voltar" onClick={() => navigate(`/users/${params.idUser}`)}/>
            </Seta>
            <Formulario/>
        </Background>
    )
}
const Background = styled.div`
    background-color: ${CORES.background};
    min-height: 100vh;
    width: 100%;

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
