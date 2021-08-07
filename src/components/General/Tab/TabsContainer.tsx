import React, { useState, createContext, useMemo } from "react";
import styled from "styled-components";
import { RowGroup, InlineGroup } from "components/General/Wrappers";
import { TTabsContext } from "./typeDefinition";
import { TabContext } from "./Context"

type TTabsContainerProps = {
    children: React.ReactNode
}

/*
    TabsContainer component
*/

export default  ({ children }: TTabsContainerProps) => {

    const [selectedTab, setSelectedTab] = useState<string | undefined>(undefined);

    const memoizedObj = useMemo(() => ({ selectedTab, setSelectedTab }), [selectedTab, setSelectedTab])

    return (
        <TabContext.Provider value={memoizedObj}>
            <RowGroup gap="0" offset="40">
                <InlineGroupWithBorder gap="48">
                    {children}
                </InlineGroupWithBorder>
            </RowGroup>
        </TabContext.Provider>
    );

}

const InlineGroupWithBorder = styled(InlineGroup)`
    border-bottom: ${({ theme }) => theme.boxModels.inputBorder};
`;