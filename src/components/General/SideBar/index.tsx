import { useState } from "react";
import styled from "styled-components";
import { center_with_flex, customScrollBar } from "styles";
import { Link } from "react-router-dom";
import { sideBarLinks } from "./data";

type TItemProps = {
    active: number | undefined
}

/*
    SideBar
*/ 

export default  () => {
    
    const [currentLocation, setCurrentLocation] = useState<string>(window.location.pathname);

    const isActive = (path: string) : number => {
        return currentLocation.indexOf(path) > -1? 1 : 0;
    }; 
    
    return (
        <RightBar>
            <MenuHeader>Меню</MenuHeader>
            <BarMenu>
            {
                sideBarLinks.map(item => {
                    return (
                        <MenuItem key={item.name}>
                            <MenuIcon active={isActive(item.url)}>{item.icon}</MenuIcon>
                            <MenuLink to={`/admin${item.url}`} onClick={() => setCurrentLocation(`/admin${item.url}`)} active={isActive(item.url)}>{item.name}</MenuLink>
                        </MenuItem>
                    ) 
                })
            }
            </BarMenu>
        </RightBar>
    );

}



const RightBar = styled.aside`
    width: 27.60%;
    height: calc(100vh - 120px);
    padding: 80px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.creamGray};
    overflow-y: scroll;
    position: fixed;
    top: 120px;
    left: 0;

    ${ customScrollBar }
`; 

const MenuHeader = styled.h1`
    font-size: 26px;
    margin-bottom: 32px;
    font-family: ${({ theme }) => theme.fonts.visbyHeavy}
`;

const BarMenu = styled.ul`
    display: grid;
    grid-row-gap: 32px;
    padding: 0;
    margin: 0;
    list-style-type: none;
`;

const MenuItem = styled.li`
    ${center_with_flex}
    justify-content: flex-start;
`;

const MenuIcon = styled.span<TItemProps>`
    margin-right: 16px;

    svg path{
        fill: ${({ active, theme }) => active?  theme.colors.green : theme.colors.black};
    }
`;

const MenuLink = styled(Link)<TItemProps>`
    color: ${({ active, theme }) => active? theme.colors.green : theme.colors.black};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
`;