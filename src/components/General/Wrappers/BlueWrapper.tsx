import styled, { css } from "styled-components";

type TBlueWrapperProps = {
    width?: string
    fullWidth?: boolean
}

const full = css`
    width: 100%;
`;

export const BlueWrapper = styled.div<TBlueWrapperProps>`
    width: ${({ width }) => width? `${width}px` : "476px"};
    padding: 32px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.lightBg2};
    ${({ fullWidth }) => fullWidth? full : ""};
`;