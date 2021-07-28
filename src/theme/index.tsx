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
            green: "#1B93B3",
            black2: "#222222",
            greenerGray: "#F1F5F8",
            cardGray: "#3A4248",
            greenNatural: "#18BA7F",
            black20: "#F3F3F3",
            gray1: "#E0E0E0",
            gray2: "#ECECEC",
            gray3: "#D0D0D0",
            gray4: "#E0E0E0",
            gray5: "rgba(0, 0, 0, .2)",
            bgColor: "#FCFCFC",
            black40: "#A5A5A5",
            primary7: "#C7E5FF",
            blueGrTop: "#1B93B3",
            blueGrBottom: "#12B1DB",
            secondary: "#FF5959",
            thirtrary3: "#36BADC"
        },
        boxModels: {
            inputBorder: "1px solid #E0E0E0;",
            inputBorderFocus: "1px solid #2678BE;"
        },
        fonts: {
            medium: "Roboto Medium",
            regular: "Roboto Regular",
            visbyMedium: "Visby",
            visbyBold: "Visby Bold",
            visbyHeavy: "Visby Heavy"
        },
        shadows: {

        },
    };

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;