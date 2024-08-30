import { isMobileDevice } from "../../functions/utils"

export const grayScale = {
    "900": "#181b23",
    "800": "#1f2029",
    "700": "#353646",
    "600": "#4b4d63",
    "500": "#616480",
    "400": "#797D9A",
    "300": "#9699B0",
    "200": "#B3B5C6",
    "100": "#D1D2DC",
    "75": "#D9D9D9",
    "50": "#EEEEF2",
    "25": "#fafafa"
}



export const conversuColors = {
    orange: '#FF5224',
    purple: '#410075',
    purpleDark: '#29004A'
}

export const inputGlobalProps = {
    base: {
        errorBorderColor: 'red.500',
        variant: 'outline',
        rounded: 'md',
        p: '2',
        size: 'md',
        fontSize: {
            base: '0.875rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1rem',
            xl: '1rem'
        },
    },
    dark: {
        bgColor: 'transparent',
        borderColor: 'white',
        color: 'white',
        _focus: {
            color: conversuColors.orange
        },
        focusBorderColor: conversuColors.orange,
        _hover: {
            borderColor: conversuColors.orange
        },
        _disabled: {
            bgColor: 'transparent',
            borderColor: 'gray.200',
            color: 'gray.200',
            cursor: 'not-allowed'
        },
        _invalid: {
            bgColor: 'transparent',
            color: 'red.500',
            border: '2px solid red'
        },
        _placeholder: {
            color: 'gray.100',
            fontWeight: 'light',
            fontSize: '1rem'
        },
    },
    light: {
        bgColor: 'white',
        borderColor: 'gray.500',
        color: conversuColors.purple,
        _focus: {
            color: conversuColors.purple
        },
        focusBorderColor: conversuColors.purple,
        _hover: {
            borderColor: conversuColors.purple
        },
        _disabled: {
            bgColor: 'white',
            borderColor: 'gray.300',
            color: 'gray.300',
            cursor: 'not-allowed'
        },
        _invalid: {
            bgColor: 'white',
            color: 'red.500',
            border: '2px solid red'
        },
        _placeholder: {
            color: 'gray.100',
            fontWeight: 'light',
            fontSize: '1rem'
        },
    }
}

export const scrollbarGlobalStyle = {
    base: {
        borderRadius: '0.25rem'
    },
    dark: {
        short: {
            width: isMobileDevice() ? '2px' : '0.6rem',
            track: grayScale[900],
            thumb: grayScale[700],
            thumbHover: grayScale[500],
        },
        large: {
            width: '0.6rem',
            track: grayScale[700],
            thumb: grayScale[800],
            thumbHover: grayScale[900],
        }
    },
    light: {
        short: {
            width: isMobileDevice() ? '2px' : '0.6rem',
            track: 'white',
            thumb: grayScale[100],
            thumbHover: grayScale[200],
        },
        large: {
            width: '0.6rem',
            track: 'white',
            thumb: grayScale[100],
            thumbHover: grayScale[200],
        }
    }
}