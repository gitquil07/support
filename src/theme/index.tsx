import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
    children: ReactNode,
};

const Theme = ({ children }: ThemeProps) => {
    const theme = {
        colors: {
            primary: "#2678BE",
            black80: "#545353",
            black60: "#7D7D7D"
        },
        boxModels: {

        },
        fonts: {
            grey: "#3A4248",
        },
        shadows: {

        },
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;