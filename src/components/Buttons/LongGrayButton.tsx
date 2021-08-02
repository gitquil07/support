import styled from "styled-components";
import { TPrButtonProps as TLongGrayButtonProps } from "./typesDefinition";
import { commonButtonStyles } from "./styles";

/*
    LongGrayButton component
*/ 

export default  ({name}: TLongGrayButtonProps) => <SLongGrButton>{name}</SLongGrButton>


const SLongGrButton = styled.button`
    ${ commonButtonStyles };
    padding: 16px 88px;
    background-color: ${({ theme }) => theme.colors.black20};
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.visbyHeavy};
    font-size: 18px;
`;