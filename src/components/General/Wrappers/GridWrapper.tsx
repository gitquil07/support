import styled from "styled-components";

type TWrapperProps = {
    repetitionAmount: string,
    size: string,
    rowGap: string,
    colGap: string,
    children: React.ReactNode,
    offset?: string
}

export const GridWrapper = styled.div<TWrapperProps>`
    display: grid;
    grid-template-columns: repeat(${({ repetitionAmount }) => repetitionAmount}, ${({ size }) => size});
    grid-gap: ${({ rowGap }) => `${rowGap}px`} ${({ colGap }) => `${colGap}px`};
    margin: ${({ offset }) => offset? `${offset}px` : "56px"} 0;
`; 
