import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Topo ({plano}) {
   return (
     <Container>
        <Img  alt="logo"/>
        <Texto>Driven Plus</Texto>
    </Container>
    )
}

const Container = styled.div``
const Img = styled.img`
    height: 95.13327026367188px;
    width: 139.37762451171875px;
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco}
`
