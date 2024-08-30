import { useContext } from "react";
import { ChatOptionsProvider } from "./provider/provider";
import { ChatOptionsContext } from "./provider/context";


export const ChatOptions = {
    Provider: ChatOptionsProvider,
    use: () => useContext(ChatOptionsContext)
}