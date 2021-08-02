import styled from "styled-components";

type TBlueWrapperProps = {
    width?: string
}

export const BlueWrapper = styled.div<TBlueWrapperProps>`
    width: ${({ width }) => width? `${width}px` : "476px"};
    padding: 32px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightBg2};
`;