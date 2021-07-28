import { useRef } from "react";
import styled from "styled-components";
import Magnifier from "assets/icons/magnifier.svg";
import { center_with_flex } from "styles";

export const Search = (): JSX.Element => {

    const search = useRef<HTMLInputElement | null>(null);

    return (

            <SearchArea>
                <SearchIcon src={Magnifier} alt="magnifier"/>
                <SearchInput ref={search} />
            </SearchArea>
    );

}

const SearchArea = styled.div`
    max-width: 902px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray1};
    padding: 14.5px 19px;
    border-radius: 111px;
    box-sizing: border-box;
    ${ center_with_flex };
    justify-content: space-between;
`;

const SearchInput = styled.input`
    height: 26px;
    width: calc(100% - 36px);
    border: 0;
    outline: 0;
    background-color: ${({ theme }) => theme.colors.bgColor};

    :focus{
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};  
    }
`;

const SearchIcon = styled.img`
    width: 26px;
    height: 26px;
`;


