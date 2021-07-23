import styled from "styled-components";

type TextInputProps = {
    placeholder: string,
    required: boolean,
    value: string,
    type?: string

    onChange: (event: any) => void,
}

const TextInput = (props: TextInputProps) => {
    return (
        <Input
            type={props.type ? props.type : "text"}
            placeholder={props.placeholder}
            onChange={props.onChange}
            // value={props.value}
            required={props.required}
        />
    );
}

export default TextInput;

const Input = styled.input`
    border: none;
    border-bottom: ${({ theme }) => theme.boxModels.inputBorder};
    height: 44px;
    width: 350px;
    color: ${({ theme }) => theme.colors.black80};
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    outline: none;

    &:focus {
      border-bottom: ${({ theme }) => theme.boxModels.inputBorderFocus};  
      transition: 0.3s all linear;
    }
`;