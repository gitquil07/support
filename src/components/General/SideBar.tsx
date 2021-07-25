import styled, { css } from "styled-components";
import { center_with_flex } from "styles";
import { Link } from "react-router-dom";
import ApplicationIcon from "assets/icons/application.svg"
import AutomationIcon from "assets/icons/automation.svg"
import AwardIcon from "assets/icons/award.svg"
import Building from "assets/icons/building.svg"
import Ideas from "assets/icons/ideas.svg"
import Kanban from "assets/icons/kanban.svg"
import Puzzle from "assets/icons/puzzle.svg"
import Recruitment from "assets/icons/recruitment.svg"
import Report from "assets/icons/report.svg"
import WebManagement from "assets/icons/webManagement.svg"

type TItem = {
    active: boolean
}

const sideBarLinks = [
    {
        icon: ApplicationIcon,
        url: "/applications",
        name: "Заявки"
    },
    {
        icon: Building,
        url: "/organizations",
        name: "Организация"
    },
    {
        icon: AutomationIcon,
        url: "/systems",
        name: "Системы"
    },
    {
        icon: Recruitment,
        url: "/system-users",
        name: "Системные пользователи"
    },
    {
        icon: Report,
        url: "/reports",
        name: "Отчеты"
    },
    {
        icon: Kanban,
        url: "/tariffs",
        name: "Тарифы"
    },
    {
        icon: AwardIcon,
        url: "/feedbacks",
        name: "Отзывы"
    },
    {
        icon: Puzzle,
        url: "/knowledge-base",
        name: "База знаний"
    },
    {
        icon: Ideas,
        url: "/themes",
        name: "Темы"
    },
    {
        icon: WebManagement,
        url: "/settings",
        name: "Настройки"
    }
];

export const SideBar = () => {

    const currentLocation: string = window.location.pathname;

    const isActive = (path: string) : boolean => currentLocation.indexOf(path) > -1; 
    
    return (
        <RightBar>
            <MenuHeader>Меню</MenuHeader>
            <BarMenu>
            {
                sideBarLinks.map(item => {
                    return (
                        <MenuItem key={item.name}>
                            <MenuIcon src={item.icon} active={isActive(item.url)}></MenuIcon>
                            <MenuLink to={`/admin${item.url}`} active={isActive(item.url)}>{item.name}</MenuLink>
                        </MenuItem>
                    ) 
                })
            }
            </BarMenu>
        </RightBar>
    );

}



const RightBar = styled.aside`
    width: 100%;
    height: calc(100vh - 120px);
    padding: 80px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.creamGray};
`; 

const MenuHeader = styled.h1`
    font-size: 26px;
    margin-bottom: 32px;
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

const MenuIcon = styled.img<TItem>`
    margin-right: 16px;
    color: ${({ active, theme }) => active?  theme.colors.green : theme.colors.black};
`;

const MenuLink = styled(Link)<TItem>`
    color: ${({ active, theme }) => active? theme.colors.green : theme.colors.black};
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
`;