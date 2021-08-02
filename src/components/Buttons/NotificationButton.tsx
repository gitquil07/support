import styled from "styled-components";
import { commonButtonStyles } from "./styles";
import NotificationBell from "assets/icons/notification-bell.svg";

/*
    Set local types
*/
type TNotificationButtonProps = {
    amount: string 
}

type TSNButtonProps = TNotificationButtonProps ;

/*
    NotificationButton component
*/ 

export default ({amount}: TNotificationButtonProps) => <SNtButton { ...{ amount } }><img src={NotificationBell} alt="notification-bell" /></SNtButton>;


const SNtButton = styled.button<TSNButtonProps>`
    width:33px;
    height:33px;
    background:transparent;
    ${ commonButtonStyles };
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
