import styled from "styled-components";
import wrong from "../assets/icone_erro.png";
import right from "../assets/icone_certo.png";
import doubt from "../assets/icone_quase.png";

function AnswerCard({ answer, setAcerto, setCardType, concluido, setConcluido }) {
    return (
        <Card>
            {answer}
            <div>
                <NaoLembrei onClick={() => errado(setAcerto, setCardType, concluido, setConcluido)}> Não<br />lembrei </NaoLembrei>
                <QuaseNaoLembrei onClick={() => duvida(setAcerto, setCardType, concluido, setConcluido)}> Quase não lembrei</QuaseNaoLembrei>
                <Zap onClick={() => certo(setAcerto, setCardType, concluido, setConcluido)}> Zap! </Zap>
            </div>
        </Card>
    )
}

function errado(setAcerto, setCardType, concluido, setConcluido) {
    setAcerto(wrong);
    concluir(setCardType, setConcluido, concluido);
}

function duvida(setAcerto, setCardType, concluido, setConcluido) {
    setAcerto(doubt)
    concluir(setCardType, setConcluido, concluido);
}

function certo(setAcerto, setCardType, concluido, setConcluido) {
    setAcerto(right)
    concluir(setCardType, setConcluido, concluido);
}

function concluir(setCardType, setConcluido, concluido) {
    setCardType("QuestionCard");
    setConcluido(concluido + 1);
}

const Card = styled.div`
background-color: #FFFFD4;
border-radius: 5px;
min-height: 130px;
width: 100%;
padding: 15px;
box-shadow: 0px 4px 5px 0px #00000026;
font-family: "Recursive";
color: #333333;
display: flex;
flex-direction: column;
justify-content: space-between;
div{
    display: flex;
    gap: 5px;
    justify-content: center;
    button{
        height: 37px;
        width: 81px;
        border-radius: 5px;
        border: none;
        font-family: "Recursive";
        color: #FFFFFF;
        font-size: 12px;
    }
}
`

const NaoLembrei = styled.button`
background-color: #FF3030;
`

const QuaseNaoLembrei = styled.button`
background-color: #FF922E;
`

const Zap = styled.button`
background-color: #2FBE34;
`

export default AnswerCard;