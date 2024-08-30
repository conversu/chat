import { conversuColors, grayScale } from "../ChatTheme/cte/global";
import { IChatLayoutProps } from "../@types/layout";



export const defaultLayout: IChatLayoutProps = {
    user: {
        bg: '#FEEBC8',
        color: conversuColors.orange
    },
    bot: {
        bg: grayScale[50],
        color: conversuColors.purple
    },
    agent: {
        bg: '#E9D8FD',
        color: conversuColors.purple
    },
    colors: {
        primary: conversuColors.orange,
        secondary: conversuColors.purple
    }
};