import AuthWrapper from "../../components/auth/Wrapper";
import styled from "styled-components";
import { center_with_flex } from "../../styles";
import TextInput from "../../components/Inputs/TextInput";
import Form from "../../components/auth/Form";

const Login = () => {
    return (
        <AuthWrapper>
            <Form>
                <Inputs>
                    <TextInput placeholder="Email" required={true} onChange={() => { }} value="" />
                    <TextInput type="password" placeholder="Пароль" required={true} onChange={() => { }} value="" />
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
