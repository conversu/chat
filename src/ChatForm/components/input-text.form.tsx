import { Input, InputProps as ChrakraInputProps } from "@chakra-ui/react";
import { ChatTheme } from "@theme/index";
import { InputBaseProps } from "@Input/components/InputContainer";
import { ChatOptions } from "@ChatOptions";
import { ChatControl } from "@ChatControl";
import { ChatForm } from "@ChatForm";
import { InputType } from "@@types/chat";





export interface InputTextProps extends InputBaseProps, ChrakraInputProps {
    isError?: boolean;
    showImage?: boolean;
    isSubmitting?: boolean;
    isDisabled?: boolean;
}

export function InputText({
    isError = false,
    showImage = false,
    isSubmitting = false,
    isDisabled = false,
    ...rest
}: InputTextProps) {


    const { inputProps } = ChatTheme.use();

    const {
        textInputRef,
        message,
        setMessage,
        inputType,
        hasPreview
    } = ChatForm.use();


    const {
        isTyping,
        showInput,
        hasAgent,
        isFocused,
        setIsFocused
    } = ChatControl.use();


    const { bot } = ChatOptions.use();

    function getPlaceholder() {

        if (hasPreview) {

            const description = inputType === InputType.IMAGE ? 'dessa imagem...' : 'desse documento...'

            return `Adicione uma descrição à respeito ${description}`;
        }

        if (isSubmitting || isTyping) {

            if (hasAgent) {

                return 'Enviando mensagem...';
            }

            return `${bot?.nickname ?? 'Lia'} está digitando...`;
        }

        return "Em que eu posso ajudar?";
    }

    return (
        <Input
            type='text'
            name='message'
            h={{
                base: '2.5rem',
                sm: '2.5rem',
                md: '3rem',
                lg: '3rem',
                xl: '3rem'
            }}
            variant='unstyled'
            px={{
                base: '0.5rem',
                sm: '0.5rem',
                md: '1.15rem',
                lg: '1.15rem',
                xl: '1.15rem'
            }}
            _placeholder={{
                color: isError && !isFocused ? 'red.500' : inputProps.color
            }}
            bg='transparent'
            border='none'
            focusBorderColor='none'
            _focus={{
                border: 'none',
                color: isError && !isFocused ? 'red.500' : undefined
            }}
            placeholder={getPlaceholder()}
            alt='enviar'
            isDisabled={!showInput || isDisabled || isSubmitting || isTyping}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rounded='full'
            value={message}
            onChange={event => setMessage(event.target.value)}
            fontSize='1rem'
            ref={textInputRef}
            {...rest}
        />
    );
}
