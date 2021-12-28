import styled from "@emotion/styled";
import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InventoryType } from "../../types/Inventory";
import { InventoryCard } from "./InventoryCard";

export const InventoryCardContainer = () => {
    const path = 'inventory'
    const { data, error }  = useFuturamaData(path);

    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <Container>
            {data.map((inventory: InventoryType) => {
                return (
                    <InventoryCard
                        inventoryData = {inventory}
                        key = {`futurama-inventory-${inventory.id}`}
                    />
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 15px;
    margin: 2em 10em;
`