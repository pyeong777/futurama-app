import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CastType } from "../../types/Cast";
import { CastCard } from "./CastCard";

export const CastCardContainer = () => {
    const path = 'cast';
    const { data, error } = useFuturamaData(path);

    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <Container>
            {data.map((cast: CastType) => {
                return (
                    <CastCard 
                        castData = {cast}
                        key = {`futurama-cast-${cast.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    gap: 15px;
    margin: 2em 10em;
`