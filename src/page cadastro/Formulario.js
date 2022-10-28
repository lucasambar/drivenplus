import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Formuario () {
    let navigate = useNavigate()

    const [obj, setObj] = useState({
        email:"",
        name:"",
        cpf:"",
        password:""
    })

    function cadastrar (event) {
        event.preventDefault()

        let promessa = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", obj)
        promessa.then(() => navigate("/"))
        promessa.catch(erro => console.log(erro.response.data))
    }

    return (
        <Form onSubmit={cadastrar}>
            <Input type="text" placeholder="Nome"
            onChange={(e) => setObj({...obj, name: e.target.value})} value={obj.name}/>

            <Input type="text" placeholder="CPF"
            onChange={(e) => setObj({...obj, cpf: e.target.value})} value={obj.cpf}/>

            <Input type="email" placeholder="E-mail"
            onChange={(e) => setObj({...obj, email: e.target.value})} value={obj.email}/>

            <Input type="password" placeholder="Senha"
            onChange={(e) => setObj({...obj, password: e.target.value})} value={obj.password}/>

            <Button type="submit">Cadastrar</Button>
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

