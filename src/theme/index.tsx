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
            black70: "#686868",
            black60: "#7D7D7D",
            white: "#ffffff",
            lightGray: "#EDF7FF",
            lightRed: "#FF7E7E",
            primary8: "#EDF7FF",
            primaryLight: "#5FA3DE",
            creamGray: "#F4F4F4",
            black: "#2B2A29",
            green: "#1B93B3"
        },
        boxModels: {
            inputBorder: "1px solid #E0E0E0;",
            inputBorderFocus: "1px solid #2678BE;"
        },
        fonts: {
            medium: "Roboto Medium",
            regular: "Roboto Regular"
        },
        shadows: {

        },
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;