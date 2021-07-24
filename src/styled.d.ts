import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string,
            black80: string,
            black70: string,
            black60: string,
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