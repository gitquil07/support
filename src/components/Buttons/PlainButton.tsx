import styled from "styled-components";
import { TPrButtonProps as TPlainButtonProps } from "./typesDefinition";
import { commonButtonStyles } from "./styles";

/*
    PlainButton component
*/ 

export default ({ name }: TPlainButtonProps) => <SPlButton>{name}</SPlButton>;


const SPlButton = styled.button`
    ${ commonButtonStyles };
    background: none;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black70};
`;
