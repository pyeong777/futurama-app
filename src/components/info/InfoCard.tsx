import styled from "@emotion/styled";
import Link from "next/link";
import { InfoType } from "../../types/Info";

interface InfoCardProps {
    infoData: InfoType;
}

export const InfoCard = ({ infoData }: InfoCardProps) => {
    const { synopsis, yearsAired, creators } = infoData;
    return (
        <Container>
            <p>{synopsis}</p>
            <p>{yearsAired}</p>
            {creators.map((infoData, idx) => {
                return (
                    <div key = {`futurama-info-${idx}`}>
                        <Link href={infoData.url}>
                            <a>
                                <Profile>{infoData.name}</Profile>
                            </a>
                        </Link>
                    </div>         
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    margin: 3em 10em;
    padding: 1em;
    border: 2px solid #eee;
    border-radius: 1.2em;
    font-size: 20px;
`


const Profile = styled.p`
    background-color: orange;
    display: inline-block;
    padding: 0.2em;
    margin-bottom: 1em;
    border-radius: 1.2em;
`