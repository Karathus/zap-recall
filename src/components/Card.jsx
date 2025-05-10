import play from "../assets/seta_play.png";
import { useState } from "react";
import QuestionCard from "./QuestionCard";
import TextCard from "./TextCard";
import AnswerCard from "./AnswerCard";

function Card({question, answer, number, concluido, setConcluido}) {
    const [cardType, setCardType] = useState("QuestionCard");
    const [acerto, setAcerto] = useState(play);
    return (
        <>
            {(cardType === "QuestionCard" ? <QuestionCard acerto={acerto} number={number} setCardType={setCardType}/> : "")}
           
            {(cardType === "TextCard" ? <TextCard question={question} setCardType={setCardType}/>: "")}

            {(cardType === "AnswerCard" ? <AnswerCard answer={answer} setAcerto={setAcerto} setCardType={setCardType} concluido={concluido} setConcluido={setConcluido}/>: "")}
        </>
    )
}


export default Card