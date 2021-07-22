import AuthWrapper from "../../components/auth/Wrapper";
import Globe from "../../assets/icons/globe.svg";
import styled from "styled-components";
import { center_with_flex } from "../../styles";
import LogoCDC from "../../assets/images/CDC-Logo.svg";
import TextInput from "../../components/Inputs/TextInput";
import { PrimaryButton } from "../../components/Buttons";

type LoginProps = {
    show: Boolean,
}

const Login = (props: LoginProps) => {
    return (
        <AuthWrapper>
            <Language>
                <img src={Globe} alt="globe" />
                <span> O'zbekcha </span>
            </Language>

            <Form show={true}>
                <Logo src={LogoCDC} alt="logo" />

                <Inputs>
                    <TextInput placeholder="Email" required={true} onChange={() => { }} value="" />
                    <TextInput placeholder="Пароль" required={true} onChange={() => { }} value="" />
                </Inputs>

                <Buttons>
                    <PrimaryButton name="Войти" />
                </Buttons>

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

const Form = styled.div<LoginProps>`
    width: ${({ show }) => show ? '100%' : '0'};
    ${center_with_flex}
    flex-direction: column;
`;

const Logo = styled.img`
    color: ${({ theme }) => theme.colors.primary};
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

const Inputs = styled.div`
    ${center_with_flex}
    flex-direction: column;
    gap: 48px;
`;

const Buttons = styled.div``;