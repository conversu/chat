import { useContext } from "react";
import ChatThemeProvider from "./provider";
import { ChatThemeContext } from "./context";
import { conversuColors, grayScale } from "./global";


export const ChatTheme = {
    Provider: ChatThemeProvider,
    use: () => useContext(ChatThemeContext),
    global: {
        conversuColors,
        grayScale
    }
}