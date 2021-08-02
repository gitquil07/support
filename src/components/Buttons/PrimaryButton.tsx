import styled from "styled-components";
import { TPrButtonProps as TPrimaryButtonProps } from "./typesDefinition";
import { PrimaryButtonStyles } from "./styles";

/*
    PrimaryButton component
*/ 

export default ({ name }: TPrimaryButtonProps) => <SPrButtion>{name}</SPrButtion>;


const SPrButtion = styled.button`
    ${ PrimaryButtonStyles };
`;