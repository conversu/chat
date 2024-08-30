import { ReactNode } from "react";
import { ChatThemeContext } from "./context";
import { InputProps, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { IChatLayoutProps } from "../../@types/layout";
import { defaultLayout } from "../../cte/layout";


interface Props {
    children: ReactNode;
    layout?: IChatLayoutProps;
    isDarkTheme?: boolean;
    toggleTheme?: () => void;
    inputProps: {
        base: Partial<InputProps>;
        light: Partial<InputProps>;
        dark: Partial<InputProps>;
    };
    scrollbarStyle: {
        base: {
            borderRadius: string;
        };
        light: {
            short: {
                width: string;
                track: string;
                thumb: string;
                thumbHover: string;
            };
            large: {
                borderRadius: string;
                width: string;
                track: string;
                thumb: string;
                thumbHover: string;
            };
        };
        dark: {
            short: {
                width: string;
                track: string;
                thumb: string;
                thumbHover: string;
            };
            large: {
                borderRadius: string;
                width: string;
                track: string;
                thumb: string;
                thumbHover: string;
            };
        }
    }
}


export default function ChatThemeProvider({
    layout,
    isDarkTheme = false,
    toggleTheme = () => { },
    inputProps,
    scrollbarStyle,
    children
}: Props) {

    const isShortVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false
    })

    return (
        <ChatThemeContext.Provider value={{
            layout: layout ?? defaultLayout,
            inputProps: { ...inputProps.base, ...useColorModeValue(inputProps.light, inputProps.dark) },
            scrollbarStyle: { ...scrollbarStyle.base, ...useColorModeValue(scrollbarStyle.light, scrollbarStyle.dark)[isShortVersion ? 'short' : 'large'] },
            isDarkTheme,
            toggleTheme,
        }}
        >
            {children}
        </ChatThemeContext.Provider>
    );

}