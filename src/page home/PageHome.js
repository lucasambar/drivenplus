import styled from "styled-components"
import CORES from "../constantes/cores"

import Pagina from "./pagina.js"

export default function PageHome () {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user)

    return (
        <Background>
            {user ? <Pagina user={user}/> : <p>ohfweioufhn</p>}
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
