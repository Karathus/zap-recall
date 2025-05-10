import Card from "./Card"
import styled from "styled-components"
import QUESTIONS from "./QUESTIONS"

function Cards({concluido, setConcluido}) {

    return(
        <CardsTable>
            {QUESTIONS.map(({question, answer}, index) => <Card 
                question={question}
                answer={answer}
                number={index + 1}
                key={index}
                concluido={concluido}
                setConcluido={setConcluido}
            />)}
        </CardsTable>
    )
}

export default Cards

const CardsTable = styled.div`
max-height: calc(100% - 190px);
width: calc(100% - 80px);
margin-top: 15px;
display: flex;
flex-direction: column;
gap: 23px;
overflow-y: auto;
`