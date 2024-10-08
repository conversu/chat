import {
    IconButton, Progress, Tooltip,
    Icon, useBreakpointValue, Flex,
    SimpleGrid, Box, Text,
    Center, Menu, MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { ChatControl } from '../../ChatControl';
import { ChatOptions } from '../../ChatOptions';
import { ChatTheme } from '../../ChatTheme';
import { RenderIf } from '../../utils/RenderIf';
import { FiArrowLeft, FiRefreshCcw } from "react-icons/fi";

import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLightMode, MdOutlineNightlightRound } from 'react-icons/md';


interface Props {
    onBack: (...args: any) => any;
}

export function ChatHeader({
    onBack
}: Props) {

    const { layout, isDarkTheme, toggleTheme } = ChatTheme.use();
    const {
        isTyping,
        isLoadingMessages,
        hasUserMessage,
        onChatRefetch,
        isRefetching,
        status
    } = ChatControl.use();
    const { bot } = ChatOptions.use();

    const isWideVersion = useBreakpointValue({
        base: false,
        sm: false,
        md: true,
        lg: true,
        xl: true
    });


    return (
        <Flex
            w='100%'
            flexDir='column'
            align='center'
            justify='flex-start'
            gap='0.5rem'
            px='0.5rem'
            rounded='lg'
        >
            <Flex
                w='100%'
                h='0.25rem'
                flexDir='column'
                align='center'
                justify='flex-start'
                px='0.5rem'
            >
                <RenderIf condition={isRefetching}>
                    <Progress
                        w='100%'
                        size='xs'
                        colorScheme='gray'
                        color={layout.colors.secondary}
                        bg='transparent'
                        isIndeterminate
                        h='0.25rem'
                        rounded='full'
                    />
                </RenderIf>
            </Flex>
            <Flex
                w='100%'
                flexDir='column'
                align='center'
                justify='flex-start'
                gap='1rem'
            >
                <SimpleGrid
                    w='100%'
                    h={{
                        base: '3rem',
                        sm: '3rem',
                        md: '3.5rem',
                        lg: '3.5rem',
                        xl: '3.5rem'
                    }}
                    templateColumns='1fr 12fr 1fr'
                    spacing='1rem'
                    pb='1rem'
                >
                    <Flex w='3rem' h='100%' flexDir='column' align='start' justify='flex-start'>
                        <RenderIf condition={status === 'OPENED'}>
                            <Tooltip
                                label='Atualizar'
                                bg={layout.colors.secondary}
                                color='white'
                                rounded='lg'
                                placement='bottom'
                                hasArrow
                            >
                                <IconButton
                                    variant='ghost'
                                    icon={<Icon as={FiRefreshCcw} />}
                                    onClick={onChatRefetch}
                                    hidden={isLoadingMessages || isTyping}
                                    aria-label='Atualizar'
                                    aria-description='Atualizar chat'
                                    color={isDarkTheme ? 'gray.100' : layout.colors.primary}
                                    _hover={{
                                        color: layout.colors.secondary
                                    }}
                                />
                            </Tooltip>
                        </RenderIf>
                        <RenderIf condition={status === 'CLOSED'}>
                            <Tooltip
                                label='Voltar'
                                bg={layout.colors.secondary}
                                color='white'
                                rounded='lg'
                                placement='bottom'
                                hasArrow
                            >
                                <IconButton
                                    variant='ghost'
                                    icon={<Icon as={FiArrowLeft} />}
                                    onClick={onBack}
                                    aria-label='Voltar'
                                    aria-description='Voltar'
                                    color={isDarkTheme ? 'gray.100' : layout.colors.primary}
                                    _hover={{
                                        color: layout.colors.secondary
                                    }}
                                />
                            </Tooltip>
                        </RenderIf>
                    </Flex>
                    <Center w='100%' h='100%'>
                        <Text
                            as='h1'
                            w='100%'
                            textAlign='center'
                            color={isDarkTheme ? 'gray.100' : layout.colors.primary}
                            fontSize={{
                                base: '1.15rem',
                                sm: '1.15rem',
                                md: '1.25rem',
                                lg: '1.25rem',
                                xl: '1.25rem'
                            }}
                            fontWeight='bold'
                        >
                            {bot.title}
                        </Text>
                    </Center>
                    <Flex w='3rem' h='100%' flexDir='column' align='end' justify='flex-end'>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                variant='ghost'
                                icon={<Icon as={IoSettingsOutline} />}
                                hidden={isLoadingMessages || isTyping}
                                aria-label='Mudar tema'
                                aria-description='Altera o tema'
                                color={isDarkTheme ? 'white' : layout.colors.primary}
                                _hover={{
                                    color: layout.colors.secondary
                                }}
                            />
                            <MenuList
                                bg={isDarkTheme ? 'gray.700' : 'white'}
                                borderColor={isDarkTheme ? 'gray.800' : 'gray.200'}
                            >
                                <MenuItem
                                    onClick={toggleTheme}
                                    icon={<Icon as={isDarkTheme ? MdOutlineLightMode : MdOutlineNightlightRound} />}
                                    bg='transparent'
                                    _hover={{
                                        bg: isDarkTheme ? 'gray.800' : 'gray.50',
                                        color: layout.colors.secondary
                                    }}
                                >
                                    Tema {isDarkTheme ? 'claro' : 'escuro'}
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </SimpleGrid>
                <RenderIf condition={!!bot?.subtitle && bot.subtitle.length > 0 && (!hasUserMessage || isWideVersion)}>
                    <Text as='p' fontSize='1.15rem' w='100%' textAlign='center'>
                        {bot.subtitle}
                    </Text>
                </RenderIf>
            </Flex>
            <Box w='100%' h='1px' bg={isDarkTheme ? 'gray.100' : 'gray.75'} />
        </Flex>
    );
}