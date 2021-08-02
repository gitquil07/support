import styled from "styled-components";

export const InputLabel = styled.div`

    label{
        display: inline-block;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.black80};
        font-size: 18px;
        font-family: ${({ theme }) => theme.fonts.regular};
    }
`; 