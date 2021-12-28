import styled from "@emotion/styled"
import { CharacterType } from "../../types/Characters";

interface CharacterCardProps {
    characterData: CharacterType;
}

export const CharacterCard = ( { characterData }: CharacterCardProps) => {
    const { age, gender, images, name, sayings } = characterData;
    return (
        <div>
            <Card>
                <Sayings>{sayings[0]}</Sayings>
                <ImgContainer>
                <Profile src={images.main} alt="" />
                </ImgContainer>
                <Content>
                    <NameTag>{name.first} {name.middle} {name.last}</NameTag>
                    <p>
                        <Tit>age</Tit>
                        {age}
                    </p>
                    <p>
                        <Tit>gender</Tit>
                        {gender}
                    </p>
                </Content>
            </Card>  
        </div>
    )
}

const Card = styled.div`
    width: 300px;
    border: 2px solid #eee;
    border-radius: 1.2em;
    padding-bottom: 1em;
`
const Sayings = styled.p`
    text-align: center;
    font-size: 14px;
    padding-bottom: 5px;
    border-bottom: 2px solid #eee;
`

const Content = styled.div`
    margin: 2em auto;
    text-align: center;
    position: relative;
`

const ImgContainer = styled.div`
    max-width: 150px;
    margin: 2em auto;
`

const NameTag = styled.p`
    font-size: 20px;
    font-weight: 700;
`

const Profile = styled.img`
    width: 100%;
    aspect-ratio: 9 / 16;
    object-fit: contain;
`

const Tit = styled.span`
    padding: 1px 10px;
    display: inline-block;
    background-color: orange;
    border-radius: 10px;
    margin-right: 1em;
`

