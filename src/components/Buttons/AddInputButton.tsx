import styled from "styled-components";
import { commonButtonStyles } from "./styles";
import { TPrButtonProps as TAddInputButtonProps} from "./typesDefinition";
import PlusGreen from "assets/icons/plusGreen.svg";
import { center_with_flex } from "styles";

/*
    AddInputButton component
*/

export default ({ name, onClick }: TAddInputButtonProps) => <SAddInputButtonProps { ...{ name, onClick } }><img src={PlusGreen} alt="plusGreen" />{name}</SAddInputButtonProps>


const SAddInputButtonProps = styled.button`
    ${ center_with_flex };
    ${ commonButtonStyles };
    width: 136px;
    padding: 8px 0;
    background-color: ${({ theme }) => theme.colors.black20};
    font-size: 14px;
    font-family: ${({ theme }) => theme.fonts.medium};
    cursor: pointer;
    border-radius: 2px;

    img{
        width: 18px;
        height: 18px;
        margin-right: 7.5px;
    }
`;