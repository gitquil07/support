export type TMatch<ParamsType> = {
    match: {
        isExact: boolean
        path: string
        url: string
        params: ParamsType
    }
}