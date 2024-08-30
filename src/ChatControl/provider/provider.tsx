import { ReactNode } from "react";
import { ChatControlContext, IChatControlContext } from "./context";




interface Props extends IChatControlContext {
    children: ReactNode;
}


export function ChatControlProvider({
    children,
    ...rest
}: Props) {


    return (
        <ChatControlContext.Provider value={{
            ...rest
        }}>
            {children}
        </ChatControlContext.Provider>
    );
}