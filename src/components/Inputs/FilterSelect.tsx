import React from "react";
import { useRef } from "react";
import styled from "styled-components";

type TFilterSelectProps = {
    name: string,
    handleChange: (e: React.FormEvent<HTMLSelectElement>) => void,
    children: React.ReactNode,
}

/*
    FilterSelect component
*/ 
export default ({ name, handleChange, children }: TFilterSelectProps) => {

    const inputRef = useRef<HTMLSelectElement>(null);

    return (
        <>
            <StyledSelectContainer>
                <StyledSelect ref={inputRef} { ...{ name } } onChange={handleChange}>
                    { children }
                </StyledSelect>
            </StyledSelectContainer>
        </>
    );

}

const StyledSelectContainer = styled.div`
    position: relative;
    
    ::after{
        content: "";
        position: absolute;
        width: 100%;
        border-bottom: ${({ theme }) => theme.boxModels.inputBorder};
        bottom: -12px;
        left: 0;
    }
`;

const StyledSelect = styled.select`
    width: 100%;
    border: 0;
    outline: 0;
    background: transparent;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black80};
`;
