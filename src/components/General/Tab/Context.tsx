import { createContext } from "react";
import { TTabsContext } from "./typeDefinition";

export const TabContext = createContext<TTabsContext>({
    selectedTab: "",
    setSelectedTab: (val: string) => {}
});