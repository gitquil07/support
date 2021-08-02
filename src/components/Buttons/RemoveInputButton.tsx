import styled from "styled-components";
import { TScButtonProps as TRemoveInputButtonProps } from "./typesDefinition";
import { commonButtonStyles } from "./styles"; 
import RemoveInput from "assets/icons/removeInput.svg";

/*
    RemoveInputButton component
*/

export default ({ onClick }: TRemoveInputButtonProps) => <SRemoveInputButton { ...{ onClick } } ><img src={RemoveInput} alt="remove" /></SRemoveInputButton>


const SRemoveInputButton = styled.button`
    width: 24px;
    height: 24px;
    ${ commonButtonStyles };
`;
