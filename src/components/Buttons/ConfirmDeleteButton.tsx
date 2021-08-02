import styled from "styled-components";
import { TPrButtonProps as TConfirmDeleteButtonProps } from "./typesDefinition";
import { FButtonStyles } from "./styles";
 
/*
    ConfirmDeleteButton component
*/ 

export default ({ name, onClick }: TConfirmDeleteButtonProps) => <SCfButton {...{ onClick }}>{name}</SCfButton>;


const SCfButton = styled.button`
    ${ FButtonStyles };
    width: fit-content;
    padding: 12px 32px;
    position: absolute;
    right: 50px;
    background-color: ${({ theme }) => theme.colors.secondary}
`;