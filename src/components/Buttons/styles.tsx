import { css } from "styled-components";

export const commonButtonStyles = css`
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2px;

    :focus{
        outline: none;
    }
`;

export const FButtonStyles = css`
    padding: 12px 12px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    ${ commonButtonStyles };
`;

export const PrimaryButtonStyles = css`
    width: 230px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};
    ${ commonButtonStyles };
`;

export const ActionButtonStyles = css`
    ${ commonButtonStyles }
    background: transparent;
    margin-left: 22px;
`;