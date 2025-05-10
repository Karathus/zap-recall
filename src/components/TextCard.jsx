import styled from "styled-components";
import swap from "../assets/seta_virar.png";

function TextCard({question, setCardType}) {
    return (
        <Card>
            {question}
            <img src={swap} onClick={() => setCardType("AnswerCard")} />
        </Card>
    )
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
position: relative;
img{
    position: absolute;
    height: 20px;
    width: 30px;
    bottom: 5px;
    right: 15px;
    z-index: 100;
    cursor: pointer;
}
`

export default TextCard;