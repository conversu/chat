import { ReactNode } from "react";


import { useMessageContext } from "../provider/message.hook";
import MessageContent from "./content.message";
import MessageTextContent from "./text.message";
import { MessageContentType } from "@@types/chat";




interface Props {
    children?: ReactNode;
}


export default function TextMessage({ children }: Props) {

    const {
        message,
    } = useMessageContext();

    if (message.contentType !== MessageContentType.TEXT) {

        return (<></>);
    }

    return (
        <MessageContent>
            <MessageTextContent />
            {children}
        </MessageContent>
    );
}