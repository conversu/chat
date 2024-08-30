import { createContext } from "react";
import { InputProps } from "@chakra-ui/react";
import { IChatLayoutProps } from "../../@types/layout";


export interface IChatThemeContext {
    layout: IChatLayoutProps;
    inputProps: InputProps;
    isDarkTheme: boolean;
    toggleTheme: () => void;
    scrollbarStyle: {
        borderRadius: string;
        width: string;
        track: string;
        thumb: string;
        thumbHover: string;
    };
}


export const ChatThemeContext = createContext({} as IChatThemeContext);