import { useQuery } from "@tanstack/react-query";

export type ILogoRole = 'AGENT' | 'BOT' | 'PARTNER';


export function useLogo(role: ILogoRole, session: string, logo?: string | null) {

    async function getLogo(): Promise<string | null> {
        let result = null;
        if (logo) {

            await fetch(logo)
                .then((response) => {

                    if (response.status === 200) {

                        result = logo
                    }
                });
        }

        return result;
    }


    return useQuery<string | null>([`logo-${role}-${session}`], () => getLogo(), {
        staleTime: 1000 * 1, // 4 hours
    });
}