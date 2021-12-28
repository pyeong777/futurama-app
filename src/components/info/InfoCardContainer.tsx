import { useFuturamaData } from "../../hooks/useFuturamaData";
import { InfoType } from "../../types/Info";
import { InfoCard } from "./InfoCard";


export const InfoCardContainer = () => {
    const path = 'info';
    const { data, error } = useFuturamaData(path);
    
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return <div>로딩중 입니다.</div>

    return (
        <div>
            {data.map((info: InfoType) => {
                return (
                    <InfoCard
                        infoData = {info}
                        key = {`futurama-info-${info.id}`}
                    />
                )
            })}
        </div>
    )
}