import { Text } from "@chakra-ui/react";
import { useMessageContext } from "../provider/message.hook";
import { RenderIf } from "../../utils/RenderIf";


export default function MessageStatus() {

    const {
        isAssistant,
        isError,
        error
    } = useMessageContext();

    return (
        <RenderIf condition={!isAssistant && isError}>
            <Text
                as='span'
                w='100%'
                textAlign='right'
                fontSize='0.6rem'
                mr='1rem'
                mt='-.5rem'
                color={error.color}
            >
                não enviada
            </Text>
        </RenderIf>
    );
}