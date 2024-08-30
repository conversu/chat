import { Button, ButtonProps } from "@chakra-ui/react";
import { ChatTheme } from "../../theme";


interface Props extends ButtonProps {

}

export function PrimaryButton({ ...rest }: Props) {

    const { layout } = ChatTheme.use();

    return (
        <Button
            bg={layout.colors.secondary}
            color='white'
            _hover={{
                bg: layout.colors.secondary,
                filter: 'brightness(0.9)'
            }}
            size='md'
            w='100%'
            maxW='250px'
            {...rest}
        />
    );
}