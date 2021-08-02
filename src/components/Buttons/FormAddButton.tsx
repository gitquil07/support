import styled from "styled-components";
import { TPrButtonProps as TFormAddButtonProps } from "./typesDefinition";
import { FButtonStyles } from "./styles";
 
/*
    FormAddButton component
*/ 

export default ({ name, onClick }: TFormAddButtonProps) => <SFAButton {...{ onClick }}>{name}</SFAButton>;


const SFAButton = styled.button`
    ${ FButtonStyles };
    background: linear-gradient(${({ theme }) => theme.colors.blueGrTop}, ${({ theme }) => theme.colors.blueGrBottom});   
`;