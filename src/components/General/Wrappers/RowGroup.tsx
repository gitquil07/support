import styled from "styled-components";

type TInputProps = {
    gap?: string
    offset?: string
}

export const RowGroup = styled.div<TInputProps>`
    display: grid;
    margin: ${({ offset }) => offset? `${offset}px` : "40px"} 0;
    grid-row-gap: ${({ gap }) => gap? `${gap}px` : "24px"};
`;