import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { QuestionType } from "../../types/Questions";
import { QuestionCard } from "./QuestionCard";

export const QuestionCardContainer = () => {
    const path = 'questions'
    const { data, error } = useFuturamaData(path);

    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <Container>
            {data.map((question: QuestionType) => {
                return (
                    <QuestionCard
                        questionData = {question}
                        key = {`futurama-question-${question.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
   margin: 2em 10em;
`