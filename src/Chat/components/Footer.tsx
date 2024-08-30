import { Flex, FlexProps } from "@chakra-ui/react";
import { ChatControl } from "@ChatControl";
import { isIOS, isMobileDevice } from "@functions/utils";


interface Props extends FlexProps {

}


export function Footer({ ...rest }: Props) {

    const { isFocused } = ChatControl.use();

    return (
        <Flex
            w='100%'
            flexDir='column'
            align='end'
            justify='flex-end'
            px='1rem'
            position={isMobileDevice() ? 'fixed' : 'relative'}
            bottom={isMobileDevice() ? '0' : undefined}
            mb={isMobileDevice() && isFocused && isIOS() ? '1rem' : undefined}
            id='chat-form'
            {...rest}
        />
    );
}