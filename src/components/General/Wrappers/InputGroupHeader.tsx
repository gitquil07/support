import styled from "styled-components";
import { center_with_flex } from "styles";


type TInputGroupHeaderProps = {
    title: string
    children?: React.ReactNode
}

/*
    InputGroupHeader component
*/

export default ({ title, children }: TInputGroupHeaderProps) => {
    return <SInputGroupHeader>
                <GroupName>{title}</GroupName>
                {children}
           </SInputGroupHeader>
}


const SInputGroupHeader = styled.div`
    ${ center_with_flex };
    justify-content: space-between;
`

const GroupName = styled.h3`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black};
`;