import styled from "styled-components";
import { center_with_flex } from "styles";

type TPageHeader = {
    title: string,
    children?: React.ReactNode,
    alignment: string
}

type THeaderContainer = {
    alignment: string
}

export const PageHeader = ({ title, children, alignment }: TPageHeader): JSX.Element => {

    return (
        <PHeaderContainer { ...{ alignment } }>
            <Title>{title}</Title>
            {children}
        </PHeaderContainer>
    );

} 

const PHeaderContainer = styled.div<THeaderContainer>`
    width: 100%;
    ${ center_with_flex };
    justify-content: ${({ alignment }) => alignment};
`;

const Title = styled.h1`
    font-family: ${({ theme }) => theme.fonts.visbyHeavy };
    font-size: 26px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.black2}
`;
