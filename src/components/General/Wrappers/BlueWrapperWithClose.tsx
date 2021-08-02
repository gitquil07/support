import styled from "styled-components";
import { BlueWrapper } from "./BlueWrapper";
import { RemoveInputButton } from "components/Buttons";

type TBlueWrapperWithCloseProp = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode
}

/*
    BlueWrapperWithClose
*/

export default ({ onClick, children }: TBlueWrapperWithCloseProp): JSX.Element => {

    return (
        <>
            <SBlueWrapperWithClose>
                <span className="buttonPosition">
                    <RemoveInputButton { ...{onClick} }/>
                </span>
                { children }
            </SBlueWrapperWithClose>
        </>
    );

};


export const SBlueWrapperWithClose = styled(BlueWrapper)`
    position: relative;
    width: 345px;

    .buttonPosition{
        position: absolute;
        top: 11px;
        right: 11px;
    }
`;

