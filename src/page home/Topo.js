import { Link } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import user from "../imagens/user.png"

export default function Topo ({nome, logo, id}) {
    return (
        <Container>
            <div>
                <Img src={logo} alt="logo plano"/>
                <Link to={`/users/${id}`}>
                    <User src={user} alt="user"/>
                </Link>
            </div>
            <Texto>Olá, {nome}</Texto>
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

    cursor: pointer;
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