import { Button } from "@Button";
import { Center, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { ChatTheme } from "@theme/index";
import { RenderIf } from "@utils/RenderIf";
import { IoDocumentOutline } from "react-icons/io5";
import { LuImage } from "react-icons/lu";
import { MdAttachFile } from "react-icons/md";




interface Props {
    renderIf?: boolean;
    isDarkTheme?: boolean;
    allowImage?: boolean;
    allowDocument?: boolean;
    onImageClick?: (...args: any[]) => any;
    onDocumentClick?: (...args: any[]) => any;
    show?: boolean;
}

export function AttachmentButton({
    renderIf = true,
    allowImage = false,
    allowDocument = false,
    onImageClick = () => { },
    onDocumentClick = () => { },
    show = true
}: Props) {

    const { layout } = ChatTheme.use();


    if (!renderIf) {

        return (<></>);
    }

    return (
        <RenderIf condition={show && (allowImage || allowDocument)}>
            <Flex
                w={{
                    base: '2.5rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3rem',
                    xl: '3rem'
                }}
                h={{
                    base: '2.5rem',
                    sm: '2.5rem',
                    md: '3rem',
                    lg: '3rem',
                    xl: '3rem'
                }}
                pr={{
                    base: '0.5rem',
                    sm: '0.5rem',
                    md: '1rem',
                    lg: '1rem',
                    xl: '1rem'
                }}
                flexDir='column'
                align='flex-end'
                justify='center'
            >
                <Menu
                    gutter={5}
                >
                    <MenuButton
                        as={Button.Custom}
                        colorScheme={useColorModeValue('gray', 'blackAlpha')}
                        aria-label="Attach file"
                        size='xs'
                        w='2rem'
                        h='2rem'
                        borderRadius='50%'
                        variant='ghost'
                        color={useColorModeValue('gray.400', 'white')}
                        fontSize={{
                            base: '1rem',
                            sm: '1rem',
                            md: '1.25rem',
                            lg: '1.25rem',
                            xl: '1.25rem'
                        }}
                        _hover={{
                            color: layout.colors.primary,
                            bg: useColorModeValue('gray.50', 'gray.300'),
                            fontSize: '1.35rem'
                        }}
                    >
                        <Center w='100%' h='100%'>
                            <Icon as={MdAttachFile} />
                        </Center>
                    </MenuButton>
                    <MenuList
                        bg={useColorModeValue('white', 'gray.700')}
                        borderColor={useColorModeValue('gray.200', 'gray.800')}
                        zIndex={300}

                    >
                        <RenderIf condition={allowImage}>
                            <MenuItem
                                icon={<Icon as={LuImage} />}
                                onClick={() => onImageClick()}
                                bg='transparent'
                                _hover={{
                                    bg: useColorModeValue('gray.50', 'gray.800'),
                                    color: layout.colors.primary
                                }}
                            >
                                Imagem
                            </MenuItem>
                        </RenderIf>
                        <RenderIf condition={allowDocument}>
                            <MenuItem
                                icon={<Icon as={IoDocumentOutline} />}
                                onClick={() => onDocumentClick()}
                                bg='transparent'
                                _hover={{
                                    bg: useColorModeValue('gray.50', 'gray.800'),
                                    color: layout.colors.primary
                                }}
                            >
                                Documento
                            </MenuItem>
                        </RenderIf>
                    </MenuList>
                </Menu>
            </Flex>
        </RenderIf>
    );
}