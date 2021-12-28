import styled from "@emotion/styled";
import { EpisodeType } from "../../types/Episodes";

interface EpisodeCardProps {
    episodeData: EpisodeType;
}

export const EpisodeCard = ( {episodeData }: EpisodeCardProps) => {
    const { number, title, writers, originalAirDate, desc } = episodeData;

    return (
        <div>
            <Card>
                <Title>{title}</Title> 
                <EpisodeTit>episode {number}</EpisodeTit>
                <div>
                    <SubTit>writers</SubTit> 
                    {writers}
                </div>
                <div>
                    <SubTit>date</SubTit>
                    {originalAirDate}
                </div>
                <Content>{desc}</Content>
            </Card>
        </div>
    )
}

const Card = styled.div`
    border: 2px solid #eee;
    padding: 5px;
    border-radius: 1.2em;
    margin: 5em 0;
`

const Title = styled.h2`
    display: inline-block;
    border-bottom: 3px solid orange;
    margin-right: 1em;
`

const SubTit = styled.p`
    padding: 1px 10px;
    display: inline-block;
    background-color: orange;
    border-radius: 10px;
    margin-right: 1em;
`

const Content = styled.p`
    font-size: 1.3em;
`

const EpisodeTit = styled.span`
    display: inline-block;
    padding: 1px 10px;
    background-color: orange;
    border-radius: 1.2em;
`