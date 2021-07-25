import styled from "styled-components";
import { center_with_flex } from "../../styles";
import { PlainButton, PrimaryButton } from "../Buttons";
import Language from "./Language";
import LogoCDC from "../../assets/images/cdc-logo.svg";

type FormProps = {
    children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
    return (
        <Wrapper>
            <Language />
            <Elements>

                <Logo src={LogoCDC} alt="logo" />

                {children}

                <Buttons>
                    <PrimaryButton name="Войти" />
                    <PlainButton name="Забыли пароль?" />
                </Buttons>

            </Elements>

            <Footer>
                <span>Нет аккаунта?</span> <span>Зарегистрироваться</span>
            </Footer>
        </Wrapper>
    );
};

export default Form;

const Wrapper = styled.div`
    ${center_with_flex}
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
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


const Buttons = styled.div`
    ${center_with_flex}
    flex-direction: column;
    gap: 24px;
`;

const Elements = styled.div`
    ${center_with_flex}
    flex-direction: column;
`;