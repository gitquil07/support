import React from "react";
import styled from "styled-components";
import Operator from "../../assets/images/operator-background.png";
import { center_with_flex } from "../../styles";
import SupportLogoPic from "../../assets/images/CyberspaceDevelopmentCenter.svg";

type Props = {
    children: React.ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
    return (
        <Container>
            <SupportLogo src={SupportLogoPic} alt="support" />
            <Children>
                {children}
            </Children>
        </Container>
    )
}

export default AuthWrapper;

const Container = styled.div`
    width: 100%;
    height: 100vh; 
    background-image: url(${Operator});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
`;

const SupportLogo = styled.img`
    width: 20%;
    position: absolute;
    bottom: 10%;
    left: 5%;
`;


const Children = styled.div`
    height: 100vh;
    width: 50%;
    float: right; 
    ${center_with_flex}
    flex-direction: column;
    padding: 70px 0;
    justify-content: space-between;
`;