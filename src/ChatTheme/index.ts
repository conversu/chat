import { useContext } from "react";
import ChatThemeProvider from "./provider/provider";
import { ChatThemeContext } from "./provider/context";
import { conversuColors, grayScale } from "./cte/global";


export const ChatTheme = {
    Provider: ChatThemeProvider,
    use: () => useContext(ChatThemeContext),
    global: {
        conversuColors,
        grayScale
    }
}