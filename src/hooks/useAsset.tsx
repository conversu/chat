import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

interface Props {
    asset?: string | null;
    source?: object | null;
}

export function useAsset({ asset, source }: Props) {

    async function fetchAsset(): Promise<object | null> {

        if (asset) {
            return await axios.get(`https://d2xyz635jthn0a.cloudfront.net/animation/${asset}.json`)
                .then((response: AxiosResponse) => {
                    return response.data;
                })
                .catch(() => {

                    return null;
                });
        }

        return source as object;
    }

    const { data, isSuccess } = useQuery([`animation-${asset}`], () => fetchAsset(), {
        cacheTime: 1000 * 60 * 60 * 24 * 7,
        refetchInterval: 1000 * 60 * 60 * 24 * 6.9,
    });

    return {
        Asset: data as object,
        isSuccess
    }
}