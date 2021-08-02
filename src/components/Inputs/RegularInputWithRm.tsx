import styled from "styled-components";
import RegularInput from "./RegularInput";
import { RemoveInputButton } from "components/Buttons";
import React from "react";

type TRegularInputWithRmProps = {
    name: string
    value: string
    placeholder: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    blur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

/*
    RegularInputWithRm component
*/ 

export default ({ name, value, placeholder, onClick, blur }: TRegularInputWithRmProps) => {

    return (
        <SRegularInputWithRm>
            <RegularInput { ...{ name, value, placeholder, blur } } />
            <SRemoveInputButton>
                <RemoveInputButton { ...{ onClick } } />
            </SRemoveInputButton>
        </SRegularInputWithRm>
    );

}

const SRegularInputWithRm = styled.div`
    position: relative;
`;

const SRemoveInputButton = styled.span`
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
`;