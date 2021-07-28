import { ApplicationIcon, AutomationIcon, AwardIcon, BuildingIcon, IdeasIcon, KanbanIcon, PuzzleIcon, RecruitmentIcon, ReportIcon, WebManagementIcon } from "../../svg/index";

type TLinks = {
    icon: React.ReactNode,
    url: string,
    name: string
}

export const sideBarLinks: TLinks[] = [
    {
        icon: <ApplicationIcon/>,
        url: "/applications",
        name: "Заявки"
    },
    {
        icon: <BuildingIcon/>,
        url: "/organizations",
        name: "Организация"
    },
    {
        icon: <AutomationIcon />,
        url: "/systems",
        name: "Системы"
    },
    {
        icon: <RecruitmentIcon />,
        url: "/system-users",
        name: "Системные пользователи"
    },
    {
        icon: <ReportIcon />,
        url: "/reports",
        name: "Отчеты"
    },
    {
        icon: <KanbanIcon />,
        url: "/tariffs",
        name: "Тарифы"
    },
    {
        icon: <AwardIcon />,
        url: "/feedbacks",
        name: "Отзывы"
    },
    {
        icon: <PuzzleIcon />,
        url: "/knowledge-base",
        name: "База знаний"
    },
    {
        icon: <IdeasIcon />,
        url: "/themes",
        name: "Темы"
    },
    {
        icon: <WebManagementIcon />,
        url: "/settings",
        name: "Настройки"
    }
];