import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import UserContext from "../providers/user"

export default function Formuario () {
    const {tokenLocal, userLocal} = useContext(UserContext)
    const navigate = useNavigate()

    const [obj, setObj] = useState({
        email: "",
        password:"",
    })

    function axiosThen (data) {
        tokenLocal(data.token);
        userLocal(data); 
        
        if (!data.membership) {navigate("/subscriptions")}
        else {navigate("/home")}
    }

    function logar (event) {
        event.preventDefault()

        const promessa = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", obj)
        promessa.then(response => axiosThen(response.data))
        promessa.catch(erro => console.log(erro.response.data))
    }

    return (
        <Form onSubmit={logar}>
            <Input type="email" placeholder="E-mail" id="email"
            onChange={(e) => setObj({...obj, email: e.target.value})} value={obj.email}/>

            <Input type="password" placeholder="Senha" id="senha"
            onChange={(e) => setObj({...obj, password: e.target.value})} value={obj.password}/>

            <Button type="submit">Entrar</Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;

    margin-top: 100px;
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

