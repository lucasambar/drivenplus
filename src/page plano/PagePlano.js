import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Conteudo from "./paginaa"



export default function PagePlano () {
    const params = useParams()
    const token = JSON.parse(localStorage.getItem("token"))
    const [plano, setPlano] = useState(undefined)

    useEffect(() => {
        const link = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${params.idPlano}`

       const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promessa = axios.get(link, config)
        promessa.then(response => setPlano(response.data))
        promessa.catch(erro => console.log(erro.response.data))
        
    }, [params, token])


    
    return (
        <>
            {plano ? <Conteudo plano={plano}/> : <p>jbjsodf</p>}
        </>
    )
}
