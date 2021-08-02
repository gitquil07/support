import styled from "styled-components";

type TextInputProps = {
    placeholder: string,
    elementRef?: any
    value?: string,
}

export const TextInput = ({ placeholder, elementRef }: TextInputProps) => {
    return <Input placeholder={placeholder} ref={elementRef} />;
}


type RegularInputProps = TextInputProps & { defaultValue: string };

export const RegularInput = ({ value, defaultValue, placeholder, elementRef }: RegularInputProps) => {
    return <RInput { ...{ defaultValue, placeholder, value } } ref={elementRef} />
}


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

export const RInput = styled.input`
    width: 100%;
    height: 48px;
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    padding-left: 16px; 

    :focus{
        outline: none;
    }

    ::placeholder{
        font-size: 15px;
        color: ${({ theme }) => theme.colors.black40};
        font-family: ${({ theme }) => theme.fonts.regular};
        letter-spacing: .2px;
    }

`;