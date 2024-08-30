import InputMask from "react-input-mask";
import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
    Input as ChakraInput,
    InputProps as ChrakraInputProps
} from '@chakra-ui/react';

import { InputBaseProps, InputContainer } from "../components/InputContainer";
import { ChatTheme } from "../../ChatTheme";


export interface CpfInputProps extends InputBaseProps, ChrakraInputProps {
    mask: string;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, CpfInputProps> = ({
    name,
    label,
    mask,
    error = null,
    labelProps,
    isLoading = false,
    renderIf = true,
    ...rest
}, ref) => {

    const { layout, inputProps } = ChatTheme.use();

    return (
        <InputContainer
            htmlFor={name}
            label={label}
            error={error}
            labelProps={labelProps}
            isLoading={isLoading}
            renderIf={renderIf}
        >
            < ChakraInput
                id={name}
                name={name}
                as={InputMask}
                mask={mask}
                maskChar={null}
                variant={rest.variant ?? 'outline'}
                ref={ref}
                {...Object.assign(inputProps, {
                    _hover: {
                        borderColor: !!error ? 'red.500' : layout.colors.secondary,
                    },
                    color: !!error ? 'red.500' : layout.colors.secondary,
                    focusBorderColor: !!error ? 'red.500' : layout.colors.secondary,
                    _focus: {
                        color: !!error ? 'red.500' : layout.colors.secondary
                    }
                })}
                {...rest}
            />
        </InputContainer>
    )
}


export const MaskedInput = forwardRef(InputBase);