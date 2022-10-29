import styled from "styled-components"
import CORES from "../constantes/cores"
import close from "../imagens/close.png"

export default function  Modal ({plano, assinar, setModal}) {
    return(
        <Background>
            <Topo onClick={() => setModal(false)}>
                <img src={close} alt="close icon"/>
            </Topo>
            <Box>
                <Texto>Tem certeza que deseja assinar o plano {plano.name} (R$ {plano.price})?</Texto>
                <div>
                    <Button cor={"#CECECE"} onClick={() => setModal(false)}>NÃO</Button>
                    <Button cor={CORES.botoes} onClick={assinar}>SIM</Button>
                </div>
            </Box>
        </Background>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000B2;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    display: flex;
    justify-content: center;
    align-items: center;
`
const Box = styled.div`
    height: 210px;
    width: 248px;
    border-radius: 12px;
    background-color: ${CORES.branco};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        gap: 14px;
    }
`
const Texto = styled.p`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: center;
    color: ${CORES.background};

    display: box;
    height: 67px;
    width: 204px;
`
const Button = styled.button`
    height: 52px;
    width: 95px;
    left: 195px;
    top: 376px;
    border-radius: 8px;
    background-color: ${props => props.cor};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: ${CORES.branco};

    cursor: pointer;
`
const Topo = styled.div`
    position: absolute;
    right: 0;
    top: 0;

    padding-right: 20px;
    padding-top: 24px;

    cursor: pointer;
`