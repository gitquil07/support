import styled from "styled-components";

type TextInputProps = {
    placeholder: string,
    onChange: (event: any) => void,
    value: string,
    required: boolean,
}

const TextInput = (props: TextInputProps) => {
    return (
        <Input type="text"
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