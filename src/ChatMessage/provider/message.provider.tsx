import { ReactNode } from "react";
import { isBefore } from "date-fns";

import { MessageContext } from "./message.context";
import { IMessage, MessageRole } from "../../@types/chat";
import { ChatTheme } from "../../ChatTheme";
import { IChatLayoutPalette, IChatLayoutProps } from "../../@types/layout";
import { ChatControl } from "../../ChatControl";


interface Props {
    message: IMessage;
    withIcon?: boolean;
    isLastMessage?: boolean;
    isError?: boolean;
    children: ReactNode;
}


export default function MessageProvider({
    message,
    isError = false,
    isLastMessage = false,
    withIcon = true,
    children
}: Props) {

    const { layout } = ChatTheme.use();
    const { seenAt } = ChatControl.use();

    const { role, sentAt } = message;

    const theme = layout[role.toLowerCase() as keyof IChatLayoutProps] as IChatLayoutPalette;

    return (
        <MessageContext.Provider value={{
            message,
            isAssistant: role === MessageRole.BOT || role === MessageRole.AGENT,
            isSeen: !seenAt || isBefore(new Date(sentAt), new Date(seenAt)),
            theme: theme,
            color: isError ? 'red.500' : theme?.color,
            bg: theme.bg,
            isError: isError,
            error: {color: 'red.500'},
            withIcon: withIcon,
            isLastMessage: isLastMessage,
            role: message.role,
            agent: message.agent,
            style: layout
        }}
        >
            {children}
        </MessageContext.Provider>
    );
}