import styled from "styled-components"
import CORES from "../constantes/cores"
import user from "../imagens/user.png"

export default function Topo () {
    return (
        <Container>
            <div>
                <Img alt="logo plano"/>
                <User src={user} alt="user"/>
            </div>
            <Texto>Olá, fulano</Texto>
        </Container>
    )
}

const Container = styled.div`
    height: 128px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div{
        height: 128px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`
const User = styled.img`
    height: 34px;
    width: 34px;

    margin: 22px 22px;
`
const Img = styled.img`
    height: 50.866729736328125px;
    width: 74.52371215820312px;

    margin: 32px 32px;
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco}
`