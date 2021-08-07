import React, { useRef } from "react";
import styled from "styled-components";

type TTextAreaProps = {
    name: string
    value: string
    onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
}

/*
    TextArea component
*/ 

export default ({ name, value, onBlur }: TTextAreaProps) => {

    console.log("textarea value", value);

    return (
        <>
            <StyledTextArea { ...{ name, onBlur } }>{value}</StyledTextArea>
        </>
    );

}; 


const StyledTextArea = styled.textarea`
    width: 100%;
    height: 394px;
    border: ${({ theme }) => theme.boxModels.inputBorder};
    padding: 15px;
    box-sizing: border-box;
    font-family: ${ ({ theme }) => theme.fonts.regular};
    font-size: 18px;
    resize: none;
`;