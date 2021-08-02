import styled from "styled-components";
import { TPrButtonProps as TSaveButtonProps } from "./typesDefinition";
import { commonButtonStyles } from "./styles";
 
/*
    SaveButton component
*/ 

export default ({ name, onClick }: TSaveButtonProps) => <SButton {...{ onClick }}>{name}</SButton>

const SButton = styled.button`   
    width: 100%;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    ${ commonButtonStyles };
    padding: 10px 0;
`;
