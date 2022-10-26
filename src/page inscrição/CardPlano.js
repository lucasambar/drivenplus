import styled from "styled-components"
import CORES from "../constantes/cores"


export default function CardPlano () {
    return (
        <Card>
            <Img alt="imagem o plano"/>
            <Texto>R$ 39,99</Texto>
        </Card>
    )
}

const Card = styled.div`
    height: 180px;
    width: 290px;
    border-radius: 12px;
    border: 3px solid #7E7E7E;

    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Img = styled.img`
    height: 28px;
    width: 97px;
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};
`