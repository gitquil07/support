import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            black80: string,
            black70: string,
            black60: string,
            white: string,
            lightGray: string,
            lightRed: string,
            primary8: string,
            primaryLight: string,
            creamGray: string,
            black: string,
            green: string
        },
        boxModels: {
            inputBorder: string,
            inputBorderFocus: string
        },
        fonts: {
            medium: string,
            regular: string
        },
        shadows: {

        }
    }
}