import { ReactNode } from "react";
import { ChatOptionsContext, IChatOptionsContext } from "./context";


export interface Props extends IChatOptionsContext {
    children: ReactNode;
}

export function ChatOptionsProvider({
    children,
    ...rest
}: Props) {

    return (
        <ChatOptionsContext.Provider value={{
            ...rest
        }}
        >
            {children}
        </ChatOptionsContext.Provider>
    );
}