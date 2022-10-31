import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"

export default function Formulario () {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))
    const navigate = useNavigate()
    const params = useParams() 
    
    const [dados, setDados] = useState({
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        currentPassword: "",
    })

    function Salvar (event) {
        event.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promessa = axios.put("https://mock-api.driven.com.br/api/v4/driven-plus/users/", dados, config)
        promessa.then(response => {localStorage.setItem("user", JSON.stringify(response.data)); navigate(`/users/${params.idUser}`)})
        promessa.catch(erro => alert(erro.response.data))
    }

    return (
        <Form onSubmit={Salvar}>
            <Input value={dados.name} type="text" placeholder="nome"
            onChange={(e) => setDados({...dados, name: e.target.value})}/>

            <InputDes value={dados.cpf} disabled/>

            <Input value={dados.email} type="text" placeholder="email"
            onChange={(e) => setDados({...dados, email: e.target.value})}/>

            <Input value={dados.currentPassword} type="text" placeholder="senha atual"
            onChange={(e) => setDados({...dados, currentPassword: e.target.value})}/>

            <Input value={dados.newPassword} type="text" placeholder="senha nova"
            onChange={(e) => setDados({...dados, newPassword: e.target.value})}/>

            <Button type="submit">SALVAR</Button>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 80px;
`
const Input = styled.input`
    height: 52px;
    width: 299px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    background-color: ${CORES.branco};
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
const InputDes = styled(Input)`
    background-color: ${CORES.disabled};
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
