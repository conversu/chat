import Lottie from "react-lottie-player";

import { Flex } from "@chakra-ui/react";
import { RenderIf } from "@utils/RenderIf";
import { Avatar } from "@Chat/components/Avatar";
import { IChatLayoutProps } from "@@types/layout";
import { IMessageRole } from "@@types/chat";
import { useAsset } from "@hooks/useAsset";

interface Props {
    style: IChatLayoutProps;
    withIcon?: boolean;
    logo?: string | null;
    name: string;
    role: IMessageRole;
}

export function TypingAnimation({ style, logo, name, role, withIcon = true }: Props) {


    const { Asset } = useAsset({
        asset: 'typing-animation'
    })

    return (
        <Flex
            w='100%'
            flexDir='column'
            align='start'
            justify='flex-start'
            pb='1rem'
            mt={withIcon ? '0.5rem' : undefined}
        >
            <Flex
                w='250px'
                flexDir='column'
                justify='center'
                align='flex-start'
                gap='1rem'
            >
                <RenderIf condition={withIcon}>
                    <Avatar.AGENT
                        alt="Atendente"
                        name={name}
                        role={role}
                        style={style}
                        logo={logo}
                    />
                    <Avatar.BOT
                        alt={name}
                        name={name}
                        role={role}
                        style={style}
                        logo={logo}
                    />
                </RenderIf>
                <Flex
                    flexDir='column'
                    justify='flex-start'
                    align='start'
                    boxShadow='md'
                    ml='1rem'
                    borderRadius='0px 10px 10px 10px'
                    px='1rem'
                    py='0.5rem'
                    bg={style.bot.bg}
                >
                    <Lottie
                        loop
                        animationData={Asset}
                        rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                        play
                        speed={2.5}
                        style={{ width: '2rem' }}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}