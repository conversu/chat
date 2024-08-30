import { useBreakpointValue } from "@chakra-ui/react";
import { ChatTheme } from "@theme/index";


export interface ScrollBarProps {
    width?: string | null;
    track?: string | null;
    thumb?: string | null;
    thumbHover?: string | null;
    borderRadius?: string | null;
}


export function useScrollbar(props?: ScrollBarProps) {

    const { scrollbarStyle } = ChatTheme.use();
    const isShortVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });

    function scrollTo(to: string, behavior?: 'instant' | 'smooth', block?: 'end' | 'nearest') {
        const element = document.getElementById(to);
        element?.scrollIntoView({ behavior: behavior ?? 'smooth', block: block ?? 'nearest' });
    }


    return {
        scrollTo,
        scrollProps: {
            '::-webkit-scrollbar': {
                'width': props?.width ?? scrollbarStyle[isShortVersion ? 'short' : 'large'].width
            },
            /* Track */
            '::-webkit-scrollbar-track': {
                'background': props?.track ?? scrollbarStyle[isShortVersion ? 'short' : 'large'].track
            },
            /* Handle */
            '::-webkit-scrollbar-thumb': {
                'background': props?.thumb ?? scrollbarStyle[isShortVersion ? 'short' : 'large'].thumb,
                'borderRadius': props?.borderRadius ?? scrollbarStyle.borderRadius,
                'cursor': 'pointer'
            },
            /* Handle on hover */
            '::-webkit-scrollbar-thumb:hover': {
                'background': props?.thumbHover ?? scrollbarStyle[isShortVersion ? 'short' : 'large'].thumbHover
            }
        }
    }
}