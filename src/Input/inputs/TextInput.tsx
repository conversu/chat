import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
    Input as ChakraInput,
    InputProps as ChrakraInputProps
} from '@chakra-ui/react';

import { InputBaseProps, InputContainer } from '../components/InputContainer';
import { ChatTheme } from '../../ChatTheme';


export interface TextInputProps extends InputBaseProps, ChrakraInputProps {

}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = ({
    name,
    label,
    error = null,
    labelProps,
    isLoading = false,
    renderIf = true,
    rightElement,
    rightElementsProps,
    showError = true,
    ...rest
}, ref) => {

    const { inputProps, layout } = ChatTheme.use();

    return (
        <InputContainer
            htmlFor={name}
            label={label}
            error={error}
            labelProps={labelProps}
            isLoading={isLoading}
            renderIf={renderIf}
            rightElement={rightElement}
            rightElementsProps={rightElementsProps}
            showError={showError}
        >
            < ChakraInput
                id={name}
                name={name}
                variant={rest.variant ?? 'outline'}
                ref={ref}
                {...Object.assign(inputProps, {
                    _hover: {
                        borderColor: layout.colors.secondary,
                    },
                    color: layout.colors.secondary,
                    focusBorderColor: layout.colors.secondary,
                    _focus: {
                        color: layout.colors.secondary
                    }
                })}
                {...rest}
            />
        </InputContainer>
    )
}


export const TextInput = forwardRef(InputBase);