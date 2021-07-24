import styled from "styled-components";

type ButtonTypes = {
    name: string
}

export const PrimaryButton = ({ name }: ButtonTypes) => <PrButton>{name}</PrButton>;

export const PlainButton = ({ name }: ButtonTypes) => <PlButton>{name}</PlButton>;

const PrButton = styled.button`
    width: 230px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    color: #ffffff;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};
    border: none;
`;

const PlButton = styled.button`
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black70};
`;