import { ReactNode, useEffect } from "react";

import { Flex } from "@chakra-ui/react";
import { ChatControl } from "@ChatControl";
import { useBrowserHead } from "@hooks/useBrowserHead";


interface Props {
    children: ReactNode;
}

export function ChatContainer({ children }: Props) {

    const { hideBrowserHeader } = useBrowserHead();
    const { isFocused } = ChatControl.use();

    useEffect(() => {
        hideBrowserHeader();
    }, [isFocused]);


    return (
        <Flex
            w='100%'
            h='100%'
            flexDir='column'
            align='center'
            justify='flex-start'
        >
            {children}
        </Flex>
    );
}