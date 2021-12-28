import styled from "@emotion/styled";
import Link from "next/link";
import { CastType } from "../../types/Cast";

interface CastCardProps {
    castData: CastType;
}

export const CastCard = ({ castData }: CastCardProps) => {
    const { name, born, bio } = castData;
    return (
            <Card>
                <Link href={bio.url}>
                    <a>
                        <NameTit>{name}</NameTit>
                        <p>{born}</p>
                    </a>
            </Link>
            </Card>
    )
}

const Card = styled.div`
    padding: 2em;
    width: 200px;
    border: 2px solid #eee;
    &:hover {
        background-color: orange;
    }
`

const NameTit = styled.p`
    font-weight: 700;
    display: inline-block;
    border-bottom: 2px solid orange;
`