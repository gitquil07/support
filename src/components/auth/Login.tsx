import AuthWrapper from "../../components/auth/Wrapper";
import styled from "styled-components";
import { center_with_flex } from "../../styles";
import { TextInput } from "../../components/Inputs/TextInput";
import Form from "../../components/auth/Form";
import PasswordInput from "../../components/Inputs/PasswordInput";
import { useRef } from "react";

const Login = () => {

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <AuthWrapper>
            <Form>
                <Inputs>
                    <TextInput placeholder="Email" elementRef={loginRef} />
                    <PasswordInput placeholder="Пароль" elementRef={passwordRef} />
                </Inputs>
            </Form>
        </AuthWrapper>
    );
}

export default Login;

const Inputs = styled.div`
    ${center_with_flex}
    flex-direction: column;
    gap: 32px;
    padding: 72px 0;
`;
