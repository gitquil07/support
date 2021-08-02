import styled from "styled-components";
import { TPrButtonProps as TGrayButtonProps } from "./typesDefinition";
import { commonButtonStyles } from "./styles";
import { center_with_flex } from "styles";
import PlusIcon from "assets/icons/plus.svg";
 
/*
    GrayButton component
*/ 

export default ({name}: TGrayButtonProps) => <SGrButton><img src={PlusIcon} alt="plus" /> {name}</SGrButton>;


const SGrButton = styled.button`
    width: 204px;
    height: 40px;
    background:${({ theme }) => theme.colors.lightGray};
    font-size: 16px;
    ${ commonButtonStyles };
    font: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.medium};
    ${center_with_flex}

    img{
        margin-right: 8px;
    }
`;