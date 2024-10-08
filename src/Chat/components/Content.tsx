import { ReactNode, useEffect } from "react";
import { Box, Flex, Skeleton } from "@chakra-ui/react";
import { generateKey, range } from "@conversu/commons";

import { ChatControl } from "../../ChatControl";
import { ChatForm } from "../../ChatForm";
import { isIOS, isMobileDevice } from "../../functions/utils";
import { ChatOptions } from "../../ChatOptions";
import { RenderIf } from "../../utils/RenderIf";

import { RenderElse } from "../../utils/RenderElse";
import { ChatTheme } from "../../ChatTheme";
import { MessageRole } from "../../@types/chat";
import { TypingAnimation } from "../../TypingAnimation";
import { useScrollbar } from "../../hooks/useScrollbar";

interface Props {
    children: ReactNode;
}

export function ChatContent({ children }: Props) {


    const {
        messages,
        isTyping,
        isLoadingMessages,
        hasUserMessage,
        hasAgent,

    } = ChatControl.use();

    const { isInputFocused } = ChatForm.use();
    const { bot, agent } = ChatOptions.use();
    const { layout } = ChatTheme.use();

    const { scrollProps, scrollTo } = useScrollbar();

    useEffect(() => {
        if (hasUserMessage) {
            if (isMobileDevice() && !isIOS()) {
                window.scrollTo(0, 1);
            }
            scrollTo('chat-end');
        }
    }, [messages, isTyping, isInputFocused]);

    return (
        <Flex
            w='100%'
            h='100%'
            maxH={{
                base: isMobileDevice() ? 'calc(100vh - 12rem)' : '83vh',
                sm: isMobileDevice() ? 'calc(100vh - 12rem)' : '83vh',
                md: bot.subtitle ? 'calc(80vh - 2.5rem)' : '80vh',
                lg: bot.subtitle ? 'calc(78.5vh - 2.5rem)' : '78.5vh',
                xl: bot.subtitle ? 'calc(78.5vh - 2.5rem)' : '78.5vh'
            }}
            flexDir='column'
            align='center'
            justify='flex-start'
        >
            <Flex
                w='100%'
                h='100%'
                flexDir='column'
                align='center'
                justify='flex-start'
                overflowX='hidden'
                overflowY='auto'
                css={{
                    ...scrollProps
                }}
            >
                <Flex
                    w='100%'
                    flexDir='column'
                    align='center'
                    justify='flex-start'
                    gap='1rem'
                    px={{
                        base: '0.5rem',
                        sm: '0.5rem',
                        md: '2rem'
                    }}
                    pt='1rem'
                >
                    <RenderIf condition={isLoadingMessages}>
                        {range(0, 3).map(item => (
                            <Flex
                                w='100%'
                                flexDir='row'
                                align='center'
                                justify={item % 2 === 0 ? 'flex-start' : 'flex-end'}
                                pb='1rem'
                                key={generateKey()}
                            >
                                <Skeleton w='80%' maxW='400px' rounded='xl' h='4rem' />
                            </Flex>
                        ))}
                    </RenderIf>
                    <RenderElse condition={isLoadingMessages}>
                        {children}
                        <RenderIf condition={isTyping && !hasAgent}>
                            <TypingAnimation
                                style={layout}
                                role={hasAgent ? MessageRole.AGENT : MessageRole.BOT}
                                logo={bot.icon}
                                name={hasAgent ? agent?.nickname ?? 'Atendente' : bot.nickname}
                                withIcon={messages.length <= 1 || messages[messages.length - 1].role === MessageRole.USER}
                            />
                        </RenderIf>
                    </RenderElse>
                    <Box id='chat-end' className='w-full' h='1rem' />
                </Flex>
            </Flex >
        </Flex>
    );
}