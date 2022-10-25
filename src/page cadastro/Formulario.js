import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Formuario () {
    return (
        <Form>
            <Input type="text" placeholder="Nome"/>
            <Input type="text" placeholder="CPF"/>
            <Input type="email" placeholder="E-mail"/>
            <Input type="password" placeholder="Senha"/>
            <Button>Entrar</Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;


`
const Input = styled.input`
    height: 52px;
    width: 299px;
    border-radius: 5px;
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.background};

    padding-left: 7px;

    &&::placeholder{
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: ${CORES.textos};
    }
`
const Button = styled.button`
    height: 52px;
    width: 299px;
    left: 38px;
    top: 427px;
    border-radius: 8px;
    padding: 18px 122px 18px 122px;
    background-color: ${CORES.botoes};
    border: none;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    cursor: pointer;

    margin-top: 8px;
`

