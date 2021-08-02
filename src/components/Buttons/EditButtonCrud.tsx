import styled from "styled-components";
import { TScButtonProps as TRemoveButtonCrudProps } from "./typesDefinition";
import { ActionButtonStyles } from "./styles";
import Edit from "assets/icons/edit.svg";
 
/*
    EditButtonCrud component
*/ 

export default ({ onClick }: TRemoveButtonCrudProps) => <ActionButton {...{ onClick } }><img src={Edit} alt="edit button" /></ActionButton>;


const ActionButton = styled.button`
    ${ ActionButtonStyles }
`;