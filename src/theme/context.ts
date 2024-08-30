import { createContext } from "react";
import { IChatLayoutProps } from "../@types/layout";
import { InputProps } from "@chakra-ui/react";


export interface IChatThemeContext {
    layout: IChatLayoutProps;
    inputProps: InputProps;
    isDarkTheme: boolean;
    toggleTheme: () => void;
    scrollbarStyle: any;
}


export const ChatThemeContext = createContext({} as IChatThemeContext);