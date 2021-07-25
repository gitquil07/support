import styled from "styled-components";
import PlusIcon from "assets/icons/plus.svg";
import NotificationBell from "assets/icons/notification-bell.svg";
import { center_with_flex } from "styles/index";

type ButtonTypes = {
    name: string
}

type NButtonType = {
    amount: string
}

export const PrimaryButton = ({ name }: ButtonTypes) => <PrButton>{name}</PrButton>;

export const PlainButton = ({ name }: ButtonTypes) => <PlButton>{name}</PlButton>;

export const GrayButton = ({name}: ButtonTypes) => <GrButton><img src={PlusIcon} alt="plus" /> {name}</GrButton>

export const NotificationButton = ({amount}: NButtonType) => <NtButton { ...{ amount } }><img src={NotificationBell} alt="notification-bell" /></NtButton>

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

const GrButton = styled.button`
    width: 204px;
    height: 40px;
    background:${({ theme }) => theme.colors.lightGray};
    border-radius: 2px;
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    font: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.medium};
    ${center_with_flex}

    img{
        margin-right: 8px;
    }
`;

const PlButton = styled.button`
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black70};
`;

const NtButton = styled.button<NButtonType>`
    width:33px;
    height:33px;
    background:transparent;
    border:none;
    outline:none;
    position:relative;

        ::after{
            content: "${({ amount }) => amount}";
            width:20px;
            height:20px;
            border-radius:50%;
            background-color: ${({ theme }) => theme.colors.lightRed};
            position: absolute;
            text-align: center;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.white};
            top: -1px;
            right: -4px;
        }

`;