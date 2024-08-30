import { Avatar } from "@chakra-ui/react";
import { ChatContainer } from "./components/Container";
import { ChatHeader } from "./components/Header";
import { ChatContent } from "./components/Content";
import { ChatHead } from "./components/Head";
import { Footer } from "./components/Footer";

import { ChatMessages } from "./components/Messages";
import { ChatControl } from "@ChatControl";


export const Chat = {
    Avatar: Avatar,
    Footer: Footer,
    Header: ChatHeader,
    Messages: ChatMessages,
    Content: ChatContent,
    Container: ChatContainer,
    Provider: ChatControl,
    Head: ChatHead,
}

