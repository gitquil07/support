import AuthWrapper from "../../components/auth/Wrapper";
import Globe from "../../assets/icons/globe.svg";
import styled from "styled-components";
import { center_with_flex } from "../../styles";
import LogoCDC from "../../assets/images/CDC-Logo.svg";

type LoginProps = {

}

const Login = (props: LoginProps) => {
    return (
        <AuthWrapper>
            <Language>
                <img src={Globe} alt="globe" />
                <span> O'zbekcha </span>
            </Language>

            <Form>
                <Logo src={LogoCDC} alt="logo" />
            </Form>

            <Footer>
                <span>Нет аккаунта?</span> <span>Зарегистрироваться</span>
            </Footer>
        </AuthWrapper>
    );
}

export default Login;

const Language = styled.div`
    gap: 5px;
    font-family: "Roboto Medium";
    color: ${({ theme }) => theme.colors.black80};
    ${center_with_flex}
`;


const Form = styled.div`

`;

const Logo = styled.img`
    width: 200px;
    margin: auto;
    display: block;
`;

const Footer = styled.div`
    span:first-child {
        color: ${({ theme }) => theme.colors.black60}
    }

    span:last-child {
        font-family: "Roboto Medium";
        color: ${({ theme }) => theme.colors.black80}
    }
`;