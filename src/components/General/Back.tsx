import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ArrowBack from "assets/icons/arrowBack.svg";
import { resetBorders } from "components/Buttons";
import { center_with_flex } from "styles";

type TProps = {
    text: string
}

export const GoBack = ({ text }: TProps) => {

    const history = useHistory();

    const handleClick = (): void => history.goBack();

    return (
        <BackComponent>
            <button onClick={handleClick}><img src={ArrowBack} alt="back" /></button>
            <span>{text}</span>
        </BackComponent>
    );

}


const BackComponent = styled.div`
    ${ center_with_flex };
    justify-content: flex-start;
    
    button{
        ${ resetBorders };
        width: 24px;
        height: 24px;
        margin-right: 12px;
    }

    span{
        color: ${({ theme }) => theme.colors.black};
        font-family: ${({ theme }) => theme.fonts.visbyMedium};
        font-size: 20px;     
    }

`;