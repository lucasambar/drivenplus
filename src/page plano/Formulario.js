import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import CORES from "../constantes/cores"
import Modal from "./Modal"

export default function Formulario ({plano}) {
    const [modal, setModal] = useState(false)
    const user = JSON.parse(localStorage.getItem("user"))
    
    const navigate = useNavigate()

    const [cartao, setCartao] = useState({
        membershipId: user.id,
        cardName: "",
        cardNumber: "",
        securityNumber: undefined,
        expirationDate: ""
    })

    const token = JSON.parse(localStorage.getItem("token"))

    function assinar (event) {
        event.preventDefault()

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        
        const promessa = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions", cartao, config)
        promessa.then(response => {localStorage.setItem("plano", JSON.stringify(response.data)); navigate("/home")})
        promessa.catch(erro => alert(erro.response.data.message))
    }

    return (
    <>
        <Form  onSubmit={(event)=>{event.preventDefault();setModal(true)}}>
            <InputG type="text" placeholder="Nome impresso no cartão" 
            onChange={(e)=> setCartao({...cartao, cardName: e.target.value})} value={cartao.cardName}/>

            <InputG type="text" placeholder="Digitos do cartão" 
            onChange={(e)=> setCartao({...cartao, cardNumber: e.target.value})} value={cartao.cardNumber}/>

            <div>
                <InputP type="number" placeholder="Código de segurança" 
                onChange={(e)=> setCartao({...cartao, securityNumber: Number(e.target.value)})} value={cartao.securityNumber}/>

                <InputP type="text" placeholder="Validade"
                onChange={(e)=> setCartao({...cartao, expirationDate: e.target.value})} value={cartao.expirationDate}/>
            </div>

            <Botao type="submit">ASSINAR</Botao>
        </Form>

        {modal ? <Modal assinar={assinar} plano={plano} setModal={setModal}/> : <></>}
    </>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;

    div{
        display: flex;
        width: 299px;
        justify-content: space-between;
    }
`
const InputG = styled.input`
    height: 52px;
    width: 299px;
    border-radius: 8px;
    border: none;

    padding-left: 14px;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.textos};

    &&::placeholder {
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: ${CORES.textos};
    }

`
const InputP = styled(InputG)`
    height: 52px;
    width: 145px;
`

const Botao = styled.button`
    height: 52px;
    width: 299px;
    left: 40px;
    top: 581px;
    border-radius: 8px;
    padding: 18px 122px 18px 122px;
    background-color: ${CORES.botoes};

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    cursor: pointer;
`