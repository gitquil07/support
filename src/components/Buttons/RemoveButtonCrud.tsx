import styled from "styled-components";
import { TScButtonProps as TRemoveButtonCrudProps } from "./typesDefinition";
import { ActionButtonStyles } from "./styles";
import Remove from "assets/icons/remove.svg";
 
/*
    RemoveButtonCrud component
*/ 

export default ({ onClick }: TRemoveButtonCrudProps) => <ActionButton { ...{ onClick } }><img src={Remove} alt="remove button" /></ActionButton>;


const ActionButton = styled.button`
    ${ ActionButtonStyles }
`;