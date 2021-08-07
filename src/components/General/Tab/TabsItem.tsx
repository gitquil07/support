import { useContext } from "react";
import styled from "styled-components";
import { TabContext } from "./Context"; 

type TTabsItemProps = {
    name: string
}

/*
    TabsItem component
*/ 

export default ({ name }: TTabsItemProps) => {

    const {selectedTab, setSelectedTab} = useContext(TabContext);

    return (
        <TabItem>
            {name}
        </TabItem>
    );

}


const TabItem = styled.span`
    padding:19px 0;
    color: ${({ theme }) => theme.colors.black40};
    font-family: ${({ theme }) => theme.fonts.visbyMedium};
    font-size: 16px;
`;