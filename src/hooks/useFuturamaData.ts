import useSWR from "swr";
import { API_ENDPOINT } from "../constants";
import { fetcher } from "../utils/fetcher";

export const useFuturamaData = (path: string) => {
        return useSWR(`${API_ENDPOINT}${path}`, fetcher);
}
