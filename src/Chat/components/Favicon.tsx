import { useLogo } from "@hooks/useLogo";
import { useEffect } from "react";

interface Props {
    icon?: string | null;
    key: string;
}

export function Favicon({ icon, key }: Props) {

    const { data: logo, isLoading, isRefetching, isSuccess } = useLogo('BOT', key, icon);

    useEffect(() => {
        if (logo) {
            const faviconUpdate = async () => {
                const favicon = document.getElementById("favicon") as HTMLLinkElement;
                if (!!logo && !!favicon) {
                    favicon.href = logo;
                }
            };
            faviconUpdate();
        }
    }, [logo, isLoading, isRefetching, isSuccess]);


    return (<></>);
}