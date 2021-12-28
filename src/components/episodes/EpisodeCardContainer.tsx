import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { EpisodeType } from "../../types/Episodes";
import { EpisodeCard } from "./EpisodeCard";

export const EpisodeCardContainer = () => {
    const path = 'episodes';
    const { data, error } = useFuturamaData(path);

    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <Container>
            {data.map((episode: EpisodeType) => {
                return (
                    <EpisodeCard 
                        episodeData = {episode}
                        key = {`futurama-episode-${episode.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    margin: 1em auto;
    max-width: 1000px;
`