import styled from "@emotion/styled";
import { QuestionType } from "../../types/Questions";

interface QuestionCardProps {
    questionData: QuestionType;
}

export const QuestionCard = ({ questionData }: QuestionCardProps) => {
    const {  id, question, possibleAnswers, correctAnswer } = questionData;
    return(
        <Card>
            <p>{`Q${id}. ${question}`}</p>
            {possibleAnswers.map((answerData, idx) => {
                return (
                    <div key = {`futurama-question-${idx}`}> 
                        <input type="radio" 
                            id =  "question"
                            name = {`${idx}-questions`}
                            value = {answerData}
                        />
                        <label htmlFor="question">
                            {answerData}
                        </label>
                    </div>
                )
            })}
            <CheckButton type="submit">check</CheckButton>
        </Card>
    )
}

const Card = styled.div`
    margin-bottom: 3em;
    border: 2px solid #eee;
    padding: 1em;
`

const CheckButton = styled.button`
    background-color: orange;
    border: none;
    padding: 2px 5px;
    border-radius: 10px;
    margin-top: 2em;
`