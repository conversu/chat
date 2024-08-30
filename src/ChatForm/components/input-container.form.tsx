import { Flex, FlexProps, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ChatTheme } from "../../ChatTheme";
import { ChatForm } from "../../ChatForm";



interface Props {
    children: ReactNode;
    props?: FlexProps;
    isMobileDevice?: boolean;
    isFocused?: boolean;
}


export function ChatFormInputContainer({
    children,
    props,
    isMobileDevice = false,
    isFocused = false
}: Props) {

    const { layout } = ChatTheme.use();
    const { isError, hasPreview } = ChatForm.use();


    return (
        <Flex
            id='input-container'
            w='100%'
            rounded={hasPreview ? 'lg' : 'full'}
            borderStyle='solid'
            borderWidth={isError ? '2px' : '1px'}
            borderColor={isError ? 'red.500' : isFocused ? layout.colors.secondary : 'gray.300'}
            flexDir='row'
            align='end'
            px={hasPreview ? undefined : {
                base: !isMobileDevice ? '.5rem' : undefined,
                sm: !isMobileDevice ? '.5rem' : undefined,
                md: undefined,
                lg: undefined,
                xl: undefined
            }}
            justify='space-between'
            gap={{
                base: '0rem',
                sm: '0rem',
                md: '1rem',
                lg: '1rem',
                xl: '1rem'
            }}
            bg={useColorModeValue('white', 'gray.700')}
            {...props}
        >
            {children}
        </Flex>
    );
}