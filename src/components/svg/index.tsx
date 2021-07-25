import ApplicationIcon from "assets/icons/application.svg";
import AutomationIcon from "assets/icons/automation.svg";
import AwardIcon from "assets/icons/award.svg";
import Building from "assets/icons/building.svg";
import Ideas from "assets/icons/ideas.svg";
import Kanban from "assets/icons/kanban.svg";
import Puzzle from "assets/icons/puzzle.svg";
import Recruitment from "assets/icons/recruitment.svg";
import Report from "assets/icons/report.svg";
import WebManagement from "assets/icons/webManagement.svg";
import styled from "styled-components";

type TColor = {
    color: string
}

export const ApplicationIconC = ({ color }: TColor) => {
    return ApplicationIcon;
}