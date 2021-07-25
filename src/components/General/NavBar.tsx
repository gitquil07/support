import { useState } from "react";
import styled from "styled-components";
import { center_with_flex, spaceBetween_with_flex } from "styles/index";
import { Link } from "react-router-dom";
import { GrayButton, NotificationButton } from "components/Buttons/index";
import CdCLogoWhite from "assets/images/cdc-logo-white.svg";
import UserIcon from "assets/icons/user.svg";


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Header>
            <HeaderContent>
                <img src={CdCLogoWhite} alt="logo" />
                <Menu>
                    <MenuItem>
                        <StyledLink to="#">Отчет</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <StyledLink to="#">База знаний</StyledLink>
                    </MenuItem>
                    <MenuItem>
                        <GrayButton name="Создать заявку"></GrayButton>
                    </MenuItem>
                    <MenuItem>
                        <NotificationButton amount="2"></NotificationButton>
                    </MenuItem>
                    <MenuItem>
                        <AccountPanel>
                            <img src={UserIcon} alt="user-icon" />
                            <AccountName>Shoxrux Raxmatov</AccountName>
                        </AccountPanel>
                    </MenuItem>
                </Menu>
            </HeaderContent>
        </Header>
    );
    
}

const Header = styled.header`
    height:120px;
    background-color: ${({theme}) => theme.colors.primary};
    ${center_with_flex}
`;

const HeaderContent = styled.div`
    width: 80%;
    ${spaceBetween_with_flex};
`;

const Menu = styled.div`
    ${center_with_flex}; 

    & > div:nth-child(2n){
        border-right: 1px solid ${({ theme }) => theme.colors.primaryLight};
    }

    & > div:nth-child(1){
        padding-right:12px;
    }

    & > div:nth-child(2){
        padding-left:12px;
    }

    & > div:nth-child(3){
        padding-right:0;
    }
`;

const MenuItem = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 32px;
    position: relative;
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
`;

const AccountPanel = styled.span`
    display: flex;

    img{
        margin-right: 11px;
    }
`;

const AccountName = styled.span`
    width: 55px;
    font-size: 12px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.primary8};
    word-wrap: break-word;
`;
