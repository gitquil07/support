import { css } from "styled-components";

export const center_with_flex = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const spaceBetween_with_flex = css`
    ${center_with_flex}
    justify-content:space-between;
`;

export const spaceAround_with_flex = css`
    ${center_with_flex}
    justify-content:space-around;
`;

export const customScrollBar = css`
    ::-webkit-scrollbar{
        width: 5px;
    }

    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: ${({ theme }) => theme.colors.gray5};
    }

    ::-webkit-scrollbar-track{
        background: transparent;
    }
`;