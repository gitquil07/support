import styled from "styled-components";
import { TPrButtonProps } from "./typesDefinition";
import { PrimaryButtonStyles } from "./styles";

/*
    Extend common type with local types
*/
 
type TAddButtonProps = TPrButtonProps & {isOpen?: boolean};

/*
    AddButton component
*/ 

export default ({ name, onClick, isOpen }: TAddButtonProps) => {
    return  <PrButtonBig {...{ onClick }}>
                {!isOpen && <Plus />}
                {name}
            </PrButtonBig> 
};


const PrButtonBig = styled.button`
    ${ PrimaryButtonStyles };
    width: fit-content;
    padding: 12px 32px 12px 35px;
    display: flex;
    align-items: center;
`;

const Plus = styled.span`
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 19px;
    
    
    ::after,
    ::before{
        content: "";
        background-color: ${({ theme }) => theme.colors.white};
        position: absolute;
    }

    ::before{
        width: 100%;
        height: 2px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

    }

    ::after{
        width: 2px;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
    }

`;