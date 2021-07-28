import styled from "styled-components";

type TWrapper = {
    repetitiomAmount: string,
    size: string,
    rowGap: string,
    colGap: string,
    children: React.ReactNode
}

export const GridWrapper = styled.div<TWrapper>`
    display: grid;
    grid-template-columns: repeat(${({ repetitiomAmount }) => repetitiomAmount}, ${({ size }) => size});
    grid-gap: ${({ rowGap }) => `${rowGap}px`} ${({ colGap }) => `${colGap}px`};
    margin: 56px 0;
`; 


type TInput = {
    gap?: string,
    offset?: string
}

export const InputGroup = styled.div<TInput>`
    display: grid;
    margin: ${({ offset }) => offset? `${offset}px` : "40px"} 0;
    grid-row-gap: ${({ gap }) => gap? `${gap}px` : "24px"};
`;

type TInline = {
    gap?: string
}

export const InlineGroup = styled.div<TInline>`
    display: flex;
    column-gap: ${({ gap }) => gap? `${gap}px` : "15px"};
`;


export const BottomOffset = styled.div`
    margin-bottom: 56px;
`;