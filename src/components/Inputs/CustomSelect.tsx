import styled from "styled-components";
import { useRef } from "react";

type TCustomSelectProps = {
    placeholder: string
    children: React.ReactNode
    fullWidth?: boolean
    name: string
}

/*
    CustomSelect
*/

export default ({ name, placeholder, children, fullWidth }: TCustomSelectProps) => {

    const selectRef = useRef<HTMLSelectElement>(null);

    return (
        <CustomizedSelect ref={selectRef} {...{ fullWidth }} { ...{ name } }>
            <option value="" selected>{placeholder}</option>
            {children}
        </CustomizedSelect>
    );

}


type TSCustomSelectProps = {
    fullWidth?: boolean
}

const CustomizedSelect = styled.select<TSCustomSelectProps>`
    width: ${({ fullWidth }) => !fullWidth? "313px" : "100%"};
    height: 48px;
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    cursor: pointer;
    border-radius: 2px;
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black40};
    letter-spacing: .2px;
    padding-left: 10px;
    padding-right: 15px;

    :focus{
        outline: none;
    }
`

