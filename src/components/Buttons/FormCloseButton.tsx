import styled from "styled-components";
import { TPrButtonProps as TFormCloseButtonProps } from "./typesDefinition";
import { FButtonStyles } from "./styles";
 
/*
    FormCloseButton component
*/ 

export default ({ name, onClick }: TFormCloseButtonProps) => <SFCButton {...{ onClick }} type="reset">{name}</SFCButton>;


const SFCButton = styled.button`
    ${ FButtonStyles };
    background-color: ${({ theme }) => theme.colors.black60};
`;
