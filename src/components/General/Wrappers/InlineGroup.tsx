import styled from "styled-components";

type TInlineProps = {
    gap?: string
}

export const InlineGroup = styled.div<TInlineProps>`
    display: flex;
    column-gap: ${({ gap }) => gap? `${gap}px` : "15px"};
`;
