import styled from "@emotion/styled";
import Link from "next/link";
import { InventoryType } from "../../types/Inventory"; 

interface InventoryCardProps {
    inventoryData: InventoryType;
}

export const InventoryCard = ({ inventoryData }: InventoryCardProps) => {
    const { title, category, description, slogan, price, stock } = inventoryData;
    return (
        <Card>
            <Title>{title}</Title>
            <Content>{category}</Content>
            <Content>{description}</Content>
            <Content>{slogan}</Content>
            <Price>
                {price}$
            </Price>
            <p>stock: {stock}</p>
        </Card>
    )
}

const Card = styled.div`
    width: 350px;
    height: 350px;
    padding: 10px;
    border: 2px solid #eee;
    overflow: hidden;
`

const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    border-bottom: 2px solid orange;
    display: inline-block;
`

const Content = styled.p`
    font-size: 14px;
`

const Price = styled.p`
    background-color: orange;
    display: inline-block;
    border-radius: 10px;
    padding: 2px 5px;
`