import styled from "styled-components";

type TCustomSelect = {
    placeholder: string
    elementRef: any
    children: React.ReactNode
}


export const CustomSelect = ({ placeholder, elementRef, children }: TCustomSelect) => {

    return (
        <CustomizedSelect ref={elementRef}>
            <option value="" selected>{placeholder}</option>
            {children}
        </CustomizedSelect>
    );

}


const CustomizedSelect = styled.select`
    width: 313px;
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

