import { Button, Center, Icon, useColorModeValue } from "@chakra-ui/react";
import { ChatTheme } from "../../ChatTheme";
import { MdOutlineLightMode, MdOutlineNightlightRound } from "react-icons/md";


interface Props {
}


export function ThemeButton({ }: Props) {

    const { layout, isDarkTheme, toggleTheme } = ChatTheme.use();

    return (
        <Button
            onClick={toggleTheme}
            variant='unstyled'
            bg='transparent'
            colorScheme='gray'
            _hover={{
                bg: useColorModeValue('gray.50', 'gray.800'),
                color: layout.colors.secondary
            }}
            rounded='full'
        >
            <Center w='100%' h='100%'>
                <Icon
                    as={isDarkTheme ? MdOutlineNightlightRound : MdOutlineLightMode}
                    fontSize={{
                        base: '1.15rem',
                        sm: '1.15rem',
                        md: '1.5rem',
                        lg: '1.5rem',
                        xl: '1.5rem'
                    }}
                />
            </Center>
        </Button>
    );
}