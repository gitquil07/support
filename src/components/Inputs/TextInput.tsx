import styled from "styled-components";

type TextInputProps = {
    placeholder: string,
    elementRef?: any
}

const TextInput = ({ placeholder, elementRef }: TextInputProps) => {
    return <Input placeholder={placeholder} ref={elementRef} />;
}

export default TextInput;

export const Input = styled.input`
    border: none;
    border-bottom: ${({ theme }) => theme.boxModels.inputBorder};
    height: 44px;
    width: 350px;
    color: ${({ theme }) => theme.colors.black80};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    outline: none;
    transition: 0.3s ease-out;

    :focus {
      border-bottom: ${({ theme }) => theme.boxModels.inputBorderFocus};  
      transition: 0.3s ease-in;
    }
`;