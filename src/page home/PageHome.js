import styled from "styled-components"
import CORES from "../constantes/cores"
import Loading from "../providers/loading"

import Pagina from "./pagina.js"

export default function PageHome () {
    let user = JSON.parse(localStorage.getItem("user"))
    let nome = user.name

    if (!user.membership) {
        user = JSON.parse(localStorage.getItem("plano"))
    }

    return (
        <Background>
            {user ? <Pagina user={user} nome={nome}/> : <Loading/>}
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
