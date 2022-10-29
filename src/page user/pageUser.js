import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import back from "../imagens/back.png"

export default function PageUser () {
    const user = JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const dados = {
        nome: user.name,
        cpf: user.cpf,
        email: user.email,
    }

    return (
        <Background>
            <Seta>
                <img src={back} alt="seta voltar" onClick={() => navigate("/home")}/>
            </Seta>
            <Form>
                <Input value={dados.nome} disabled/>
                <Input value={dados.cpf} disabled/>
                <Input value={dados.email} disabled/>
                <Button>ATUALIZAR</Button>
            </Form>
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
const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 150px;
`
const Input = styled.input`
    height: 52px;
    width: 299px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    background-color: ${CORES.disabled};
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    padding-left: 7px;
`
const Button = styled.button`
    height: 52px;
    width: 299px;
    left: 36px;
    top: 410px;
    border-radius: 8px;
    border: none;
    background-color: ${CORES.botoes};

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`
const Seta = styled.div`
    width: 100%;
    padding-left: 22px;
    padding-top: 22px;

    img{
        cursor: pointer;
    }
`
