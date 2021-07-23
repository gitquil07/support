
import { useState } from "react";
import styled from "styled-components";
import Eye from "../../assets/icons/eye.svg";
import { Input } from "./TextInput";

type PasswordInputProps = {
    placeholder: string,
    elementRef?: any
}

const PasswordInput = ({ placeholder, elementRef, }: PasswordInputProps) => {
    const [show, setShow] = useState(false);

    return (
        <Wrapper>
            <Input
                type={show ? "text" : "password"}
                placeholder={placeholder}
                ref={elementRef}
            />
            <img src={Eye} alt="eye" onClick={() => setShow(!show)} />
        </Wrapper>
    );
}

export default PasswordInput;

const Wrapper = styled.div`
    position: relative;

    img {
        position: absolute;
        right: 0;
        top: 10px;
    }
`;