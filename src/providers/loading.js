import styled from "styled-components"
import CORES from "../constantes/cores"
import loading from "../imagens/loading.gif"

export default function Loading () {
    return (
        <Div>
            <img src={loading} alt=""/>
        </Div>
    )

}

const Div = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: ${CORES.background};
    img {
        width: 50px;
        height: 50px;

        position: absolute;
        top: 50%;
        left: 50%;
    }
`