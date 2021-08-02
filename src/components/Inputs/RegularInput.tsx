import React, { useEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";

type TRegularInputProps = {
    name: string
    value: string
    placeholder: string
    blur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

/*
    RegularInput component
*/ 

export default ({ name, value, placeholder, blur }: TRegularInputProps) => {
    
    const rInput = useRef<HTMLInputElement>(null);

    return <SRegularInput defaultValue={value} ref={rInput} {...{ placeholder, name }} onBlur={e => blur? blur(e) : ""} />

}; 

const SRegularInput = styled.input`
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

