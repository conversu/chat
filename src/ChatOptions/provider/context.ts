import { createContext } from "react";



export interface IChatOptionsContext {
    bot: {
        title: string;
        subtitle?: string | null;
        nickname: string;
        icon?: string | null;
    };
    agent?: {
        uuid: string;
        nickname: string;
        logo?: string | null
    };
}


export const ChatOptionsContext = createContext({} as IChatOptionsContext);