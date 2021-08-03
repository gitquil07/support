import styled from "styled-components";
import { center_with_flex } from "styles";

type TPageHeaderProps = {
    title: string,
    children?: React.ReactNode,
    alignment: string
}

type THeaderContainerProps = {
    alignment: string
}

/*
    PageHeader
*/ 


export default ({ title, children, alignment }: TPageHeaderProps) => {

    return (
        <PHeaderContainer { ...{ alignment } }>
            <Title>{title}</Title>
            {children}
        </PHeaderContainer>
    );

} 

const PHeaderContainer = styled.div<THeaderContainerProps>`
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
