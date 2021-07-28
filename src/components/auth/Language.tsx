import React from "react";
import styled from "styled-components";
import Globe from "../../assets/icons/globe.svg"
import { center_with_flex } from "../../styles";

const Language = () => {
    return (
        <Wrapper>
            <img src={Globe} alt="globe" />
            <span> O'zbekcha </span>
        </Wrapper>
    );
}

export default Language;

const Wrapper = styled.div`
    gap: 5px;
    font-family: "Roboto Medium";
    color: ${({ theme }) => theme.colors.black80};
    ${center_with_flex}
`;