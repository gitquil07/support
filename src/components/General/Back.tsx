import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ArrowBack from "assets/icons/arrowBack.svg";
import { commonButtonStyles } from "styles";
import { center_with_flex } from "styles";

type TGoBackProps = {
    text: string
}

/*
    GoBack component
*/

export default ({ text }: TGoBackProps) => {

    const history = useHistory();

    const handleClick = (e: React.SyntheticEvent): void => {
        history.goBack()
        e.preventDefault();
    };

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
        ${ commonButtonStyles };
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