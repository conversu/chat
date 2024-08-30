import { Button } from "../../Button";
import { Flex } from "@chakra-ui/react";
import { ChatControl } from "../../ChatControl";
import { RenderElse } from "../../utils/RenderElse";


interface Props {
    onReset: (...args: any[]) => Promise<void> | void;
}

export function RestartSession({ onReset }: Props) {

    const { showInput } = ChatControl.use();

    return (
        <RenderElse condition={showInput}>
            <Flex
                w='100%'
                flexDir='row'
                align='center'
                justify='center'
                px='1rem'
                pt='1rem'
            >
                <Button.Primary
                    w='80%'
                    h='2rem'
                    rounded='md'
                    alignItems='center'
                    justifyContent='center'
                    cursor='pointer'
                    _hover={{
                        filter: 'brightness(0.9)',
                        opacity: 0.9
                    }}

                    onClick={onReset}
                >
                    iniciar novo atendimento
                </Button.Primary>
            </Flex>
        </RenderElse>
    );
}