import styled from "styled-components";
import play from "../assets/seta_play.png"
import wrong from "../assets/icone_erro.png";
import right from "../assets/icone_certo.png";
import doubt from "../assets/icone_quase.png";

function QuestionCard({acerto, number, setCardType}) {
    return (
        <Card $acerto={acerto}>
            Pergunta {number}
            <img src={(acerto)} onClick={() => {acerto === play ? start(setCardType) : ""}} />
        </Card>
    );
}

function start(setCardType) {
    setCardType("TextCard");
}

const Card = styled.div`
background-color: #FFFFFF;
border-radius: 5px;
min-height: 65px;
width: 100%;
padding: 0 15px;
box-shadow: 0px 4px 5px 0px #00000026;
font-family: "Recursive";
text-decoration: ${props => (props.$acerto === play ? "none" : "line-through")};
color: ${props => (props.$acerto === right ? "#2FBE34" : "#333333")};
color: ${props => (props.$acerto === doubt ? "#FF922E" : "")};
color: ${props => (props.$acerto === wrong ? "#FF3030" : "")};
display: flex;
align-items: center;
justify-content: space-between;
img{
    cursor: pointer;
}
`

export default QuestionCard;