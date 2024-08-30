import { useContext } from "react";
import { ChatControlProvider } from "./provider/provider";
import { ChatControlContext } from "./provider/context";



export const ChatControl = {
    Provider: ChatControlProvider,
    use: () => useContext(ChatControlContext)
}