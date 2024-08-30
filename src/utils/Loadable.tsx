import React, { ReactNode } from 'react';
import { Center, CenterProps, Flex, Icon, Spinner, Text } from "@chakra-ui/react";


import { RenderIf } from "./RenderIf";
import { AiFillWarning } from 'react-icons/ai';


type LoadableType = 'default';


export interface LoadableProps {
    isLoading: boolean;
    title?: string;
    children?: ReactNode | ReactNode[];
    isLoadingError?: boolean;
    loadingErrorMessage?: ReactNode;
    errorElement?: ReactNode;
    skeleton?: ReactNode;
    asset?: LoadableType;
    color?: string;
    containerProps?: CenterProps;
    isDarkTheme?: boolean;
}

export function Loadable({
    isLoading,
    isLoadingError = false,
    errorElement,
    loadingErrorMessage,
    skeleton,
    title,
    // asset = 'default',
    children,
    containerProps,
    isDarkTheme = false
}: LoadableProps) {

    if (!isLoading && !isLoadingError) {

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }


    const defaultColor = isDarkTheme ? 'white' : 'app.primary';

    if (isLoading) {

        return (
            <Center w='100%' h='100%' {...containerProps}>
                <RenderIf condition={!skeleton}>
                    <Flex w='100%' flexDir='column' align='center' justify='center' gap='1rem' maxW='400px' color={defaultColor}>
                        <Spinner />
                        <Text w='100%' textAlign='center'>
                            {title ?? 'Carregando...'}
                        </Text>
                    </Flex>
                </RenderIf>
                <RenderIf condition={!!skeleton}>
                    {skeleton}
                </RenderIf>
            </Center>
        )
    }

    if (isLoadingError) {

        return (
            <Center w='100%' h='100%' {...containerProps}>
                <RenderIf condition={!!errorElement}>
                    {errorElement}
                </RenderIf>
                <RenderIf condition={!skeleton}>
                    <Flex w='100%' flexDir='column' align='center' justify='center' gap='1rem' maxW='400px' color={defaultColor}>
                        <Icon as={AiFillWarning} fontSize='3rem' />
                        <Text w='100%' textAlign='center'>
                            {loadingErrorMessage ?? 'Erro ao carregar'}
                        </Text>
                    </Flex>
                </RenderIf>
            </Center>
        );
    }


    return (<></>);
}