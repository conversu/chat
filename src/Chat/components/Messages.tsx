import React from "react";
import { ChatMessage } from "../../ChatMessage";
import { ChatControl } from "../../ChatControl";


export function ChatMessages() {

    const { messages, isTyping } = ChatControl.use();

    return (
        <React.Fragment>
            {messages.sort((a, b) => a.sentAt - b.sentAt).map(item => (
                <ChatMessage.Provider
                    key={item.uuid}
                    isError={item.isError}
                    message={item}
                    withIcon={messages.indexOf(item) === 0 || messages[messages.indexOf(item) - 1].role !== item.role}
                    isLastMessage={messages.indexOf(item) === messages.length - 1 && !isTyping}
                >
                    <ChatMessage.Container>
                        <ChatMessage.Avatar />
                        <ChatMessage.Content.Container>
                            <ChatMessage.Content.TEXT>
                                <ChatMessage.Detail />
                            </ChatMessage.Content.TEXT>
                            <ChatMessage.Content.LINK />
                            <ChatMessage.Content.IMAGE>
                                <ChatMessage.Detail />
                            </ChatMessage.Content.IMAGE>
                            <ChatMessage.Content.DOCUMENT>
                                <ChatMessage.Detail />
                            </ChatMessage.Content.DOCUMENT>
                        </ChatMessage.Content.Container>
                        <ChatMessage.Status />
                    </ChatMessage.Container>
                </ChatMessage.Provider>
            ))}
        </React.Fragment>
    );
}