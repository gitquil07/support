import { ReactNode } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

type ThemeProps = {
    children: ReactNode,
};

const Theme = ({ children }: ThemeProps) => {
    const theme: DefaultTheme = {
        colors: {
            primary: "#2678BE",
            black80: "#545353",
            black60: "#7D7D7D"
        },
        boxModels: {

        },
        fonts: {

        },
        shadows: {

        },
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;