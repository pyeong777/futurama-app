import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { CharacterType } from "../../types/Characters";
import { CharacterCard } from "./CharacterCard";

export const CharacterCardContainer = () => {
    const path = 'characters';
    const { data, error} = useFuturamaData(path);
    
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <Container>
            {data.map((character: CharacterType) => {
                return (
                    <CharacterCard 
                    characterData = {character} 
                    key = {`futurama-character-${character.id}`} 
                />
                )
            })}
        </Container> 
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    place-items: center;
    padding: 1em 10em;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
`