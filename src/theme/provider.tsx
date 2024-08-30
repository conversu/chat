import { ReactNode, useState } from "react";
import { ChatThemeContext } from "./context";
import { IChatLayoutProps } from "../@types/layout";
import { defaultLayout } from "../cte/layout";
import { inputGlobalProps, scrollbarGlobalStyle } from "./global";
import { useColorModeValue } from "@chakra-ui/react";


interface Props {
    children: ReactNode;
    layout?: IChatLayoutProps;
}


export default function ChatThemeProvider({ layout, children }: Props) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);


    return (
        <ChatThemeContext.Provider value={{
            layout: layout ?? defaultLayout,
            inputProps: { ...inputGlobalProps.base, ...useColorModeValue(inputGlobalProps.light, inputGlobalProps.dark) },
            scrollbarStyle: { ...scrollbarGlobalStyle.base, ...useColorModeValue(scrollbarGlobalStyle.light, scrollbarGlobalStyle.dark) },
            isDarkTheme,
            toggleTheme: () => setIsDarkTheme(!isDarkTheme),
        }}
        >
            {children}
        </ChatThemeContext.Provider>
    );

}