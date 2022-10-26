import styled from "styled-components"
import CORES from "../constantes/cores"


export default function CardPlano ({infos}) {
    return (
        <Card>
            <Img src={infos.image} alt="imagem o plano"/>
            <Texto>{infos.price}</Texto>
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

    cursor: pointer;
`
const Img = styled.img`
    height: 95.13327026367188px;
    width: 139.37762451171875px;
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