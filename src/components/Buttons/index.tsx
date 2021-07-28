import styled, { css } from "styled-components";
import PlusIcon from "assets/icons/plus.svg";
import NotificationBell from "assets/icons/notification-bell.svg";
import { center_with_flex } from "styles/index";
import Edit from "assets/icons/edit.svg";
import Remove from "assets/icons/remove.svg";

type ButtonTypes = {
    name: string
    onClick?: () => void
};


type NButtonType = {
    amount: string
};

type TCrud = {
    onClick: () => void
}

type AddButtonTypes = ButtonTypes & {isOpen?: boolean};

export const PrimaryButton = ({ name }: ButtonTypes) => <PrButton>{name}</PrButton>;

export const PlainButton = ({ name }: ButtonTypes) => <PlButton>{name}</PlButton>;

export const GrayButton = ({name}: ButtonTypes) => <GrButton><img src={PlusIcon} alt="plus" /> {name}</GrButton>

export const LongGrayButton = ({name}: ButtonTypes) => <LongGrButton>{name}</LongGrButton>

export const SaveButton = ({ name, onClick }: ButtonTypes) => <SButton {...{ onClick }}>{name}</SButton>

export const FormAddBtn = ({ name, onClick }: ButtonTypes) => <FAButton {...{ onClick }}>{name}</FAButton>

export const FormCloseBtn = ({ name, onClick }: ButtonTypes) => <FCButton {...{ onClick }} type="reset">{name}</FCButton>

export const NotificationButton = ({amount}: NButtonType) => <NtButton { ...{ amount } }><img src={NotificationBell} alt="notification-bell" /></NtButton>

export const ConfirmDeleteButton = ({ name, onClick }: ButtonTypes) => <ConfirmButton {...{ onClick }}>{name}</ConfirmButton>

export const AddButton = ({ name, onClick, isOpen }: AddButtonTypes) => {
    return  <PrButtonBig {...{ onClick }}>
                {!isOpen && <Plus />}
                {name}
            </PrButtonBig> 
}

export const RemoveButtonCrud = ({ onClick }: TCrud) => <ActionButton { ...{ onClick } }><img src={Remove} alt="remove button" /></ActionButton>

export const EditButtonCrud = ({ onClick }: TCrud) => <ActionButton {...{ onClick } }><img src={Edit} alt="edit button" /></ActionButton>



export const resetBorders = css`
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2px;

    :focus{
        outline: none;
    }
`;

const PrButton = styled.button`
    width: 230px;
    height: 48px;
    background: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};
    ${ resetBorders };
`;

const PrButtonBig = styled(PrButton)`
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

const GrButton = styled.button`
    width: 204px;
    height: 40px;
    background:${({ theme }) => theme.colors.lightGray};
    font-size: 16px;
    ${ resetBorders };
    font: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.medium};
    ${center_with_flex}

    img{
        margin-right: 8px;
    }
`;

const SButton = styled.button`   
    width: 100%;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    ${ resetBorders };
    padding: 10px 0;
`;

const LongGrButton = styled.button`
    ${ resetBorders };
    padding: 16px 88px;
    background-color: ${({ theme }) => theme.colors.black20};
    color: ${({ theme }) => theme.colors.black80};
    font-family: ${({ theme }) => theme.fonts.visbyHeavy};
    font-size: 18px;
`;

const PlButton = styled.button`
    ${ resetBorders };
    background: none;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black70};
`;

const NtButton = styled.button<NButtonType>`
    width:33px;
    height:33px;
    background:transparent;
    ${ resetBorders };
    position:relative;

        ::after{
            content: "${({ amount }) => amount}";
            width:20px;
            height:20px;
            border-radius:50%;
            background-color: ${({ theme }) => theme.colors.lightRed};
            position: absolute;
            text-align: center;
            font-size: 14px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.white};
            top: -1px;
            right: -4px;
        }

`;

const FButtonStyles = css`
    width: 150px;
    padding: 12px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.medium};
    ${ resetBorders };
`;

const FAButton = styled.button`
    ${ FButtonStyles };
    background: linear-gradient(${({ theme }) => theme.colors.blueGrTop}, ${({ theme }) => theme.colors.blueGrBottom});   
    `;

const FCButton = styled.button`
    ${ FButtonStyles };
    background-color: ${({ theme }) => theme.colors.black60};
`;

const ActionButton = styled.button`
    ${ resetBorders }
    background: transparent;
    cursor: pointer;
    margin-left: 22px;
`;

const ConfirmButton = styled.button`
    ${ FButtonStyles };
    width: fit-content;
    padding: 12px 32px;
    position: absolute;
    right: 50px;
    background-color: ${({ theme }) => theme.colors.secondary}
`;