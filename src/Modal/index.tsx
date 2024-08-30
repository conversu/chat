import {
    ModalOverlay, Modal as ChakraModal,
    ModalContent, ModalCloseButton, ModalBody,
    Flex, Drawer, DrawerOverlay, DrawerContent,
    DrawerBody, FlexProps, Center, Box,
    useBreakpointValue
} from "@chakra-ui/react";
import { isMobileDevice } from "@functions/utils";
import { useScrollbar } from "@hooks/useScrollbar";
import { RenderIf } from "@utils/RenderIf";
import { ReactNode, TouchEvent, useState } from "react";


interface Props {
    isOpen: boolean;
    onClose: () => void;
    bg?: string;
    color?: string;
    children: ReactNode;
    bodyProps?: FlexProps;
}

export function Modal({
    isOpen,
    onClose,
    bg = 'gray.50',
    color,
    children,
    bodyProps
}: Props) {

    const isShortVersion = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false
    });
    const { scrollProps } = useScrollbar({
        track: bg,
        thumb: 'gray.200',
        thumbHover: 'gray.300'
    });

    const [startY, setStartY] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        setStartY(event.touches[0].clientY);
        setIsDragging(true);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            const endY = event.changedTouches[0].clientY;
            if (endY - startY > 50) {
                onClose();
            }
        }
        setIsDragging(false);
    };


    if (isShortVersion) {

        return (
            <Drawer
                isOpen={isOpen}
                onClose={onClose}
                placement='bottom'
            >
                <DrawerOverlay />
                <DrawerContent
                    bg={bg}
                    borderRadius='10px 10px 0px 0px'
                >
                    <RenderIf condition={isMobileDevice()}>
                        <Center
                            w='100%'
                            h='1rem'
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Box
                                w='100px'
                                h='0.25rem'
                                rounded='full'
                                bg={color ?? 'white'}
                                opacity={0.4}
                            />
                        </Center>
                    </RenderIf>
                    <ModalCloseButton
                        color={color ?? 'white'}
                        mr='-.5rem'
                        mt='-.5rem'
                    />
                    <DrawerBody
                        w='100%'
                        h='100%'
                        mt='1rem'
                        bg={bg}
                        maxH='75vh'
                        rounded='lg'
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        overflowY='auto'
                        __css={{
                            ...scrollProps
                        }}
                    >
                        <Center w='100%' h='100%'>
                            <Flex
                                w='100%'
                                maxW={{
                                    base: '300px',
                                    sm: '300px',
                                    md: '600px',
                                    lg: '600px',
                                    xl: '800px'
                                }}
                                flexDir='column'
                                align='center'
                                justify='center'
                                gap='1rem'
                                {...bodyProps}
                            >
                                {children}
                            </Flex>
                        </Center>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        );
    }


    return (
        <ChakraModal
            isOpen={isOpen}
            onClose={onClose}
            size={{
                base: 'full',
                sm: 'full',
                md: 'lg',
                lg: 'lg',
                xl: 'lg'
            }}

        >
            <ModalOverlay />
            <ModalContent bg={bg}>
                <ModalCloseButton />
                <ModalBody
                    mt='2rem'
                    bg={bg}
                    rounded='lg'
                    w='100%'
                >
                    <Flex
                        w='100%'
                        h='100%'
                        maxH='80vh'
                        flexDir='column'
                        align='center'
                        justify='flex-start'
                        gap='1rem'
                        {...bodyProps}
                    >
                        {children}
                    </Flex>
                </ModalBody>
            </ModalContent>
        </ChakraModal>
    );
}