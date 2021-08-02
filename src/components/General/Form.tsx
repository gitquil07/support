import styled from "styled-components";

type TSFormProps = {
    fullWidth?: boolean
}

/*
    Form component
*/ 

export const Form = styled.form<TSFormProps>`
    margin: 0;
    padding: 0;
    width: ${ ({ fullWidth }) => !fullWidth? "555px" : "100%"};
`;