import { IAgent, IMessage, IMessageRole } from "@@types/chat";
import { IChatLayoutPalette, IChatLayoutProps } from "@@types/layout";
import { createContext } from "react";



export interface IMessageContext {
    message: IMessage;
    isAssistant: boolean;
    isSeen: boolean;
    theme: IChatLayoutPalette;
    color: string;
    bg: string;
    isError: boolean;
    error: { color: string; }
    withIcon: boolean;
    isLastMessage: boolean;
    role: IMessageRole;
    agent: IAgent | null;
    style: IChatLayoutProps;
}


export const MessageContext = createContext({} as IMessageContext);