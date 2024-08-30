import { IMessage } from "@@types/chat";
import { createContext } from "react";


export interface IChatControlContext {
    isTyping: boolean;
    showInput: boolean;
    hasAgent: boolean;
    isFocused: boolean;
    isLoadingMessages: boolean;
    hasUserMessage: boolean;
    isRefetching: boolean;
    onChatRefetch: (...args: any[]) => any;
    setIsFocused: (value: boolean) => void;
    messages: IMessage[];
    status: 'OPENED' | 'STAND_BY' | 'CLOSED';
    head: string;
    seenAt?: number;
}

export const ChatControlContext = createContext({} as IChatControlContext);