import styled from "styled-components"

import Card from "./Card"
import Topo from "./Topo"


export default function Pagina ({user}) {
    const perks = user.membership.perks
    
    return (
        <>
            <Topo nome={user.name} logo={user.membership.image}/>
            <ContainerCards>
               {perks.map((infos) => <Card infos={infos} key={infos.id}/>)}
            </ContainerCards>
        </>

    )
}

const ContainerCards = styled.div`
    padding-top: 48px;

    display: flex;
    flex-direction: column;
    gap: 8px;
`