import { Flex, FlexProps, Skeleton } from "@chakra-ui/react";
import { ChatTheme } from "@theme/index";
import { RenderIf } from "@utils/RenderIf";



interface InputLoadingProps extends FlexProps {
    label?: string;
    rows?: number;
}

export function InputLoading({ label, rows = 1, ...rest }: InputLoadingProps) {

    const { inputProps } = ChatTheme.use();

    return (
        <Flex
            w='100%'
            flexDir='column'
            align='start'
            justify='center'
            gap='0.5rem'
            {...rest}
        >
            <RenderIf condition={!!label}>
                <Skeleton
                    w={`${!!label ? label.length * 15 : 0}px`}
                    h='1rem'
                    rounded={inputProps.rounded}
                />
            </RenderIf>
            <Skeleton
                w='100%'
                h={`${rows * 3}rem`}
                rounded={inputProps.rounded}
            />
        </Flex>
    );
}