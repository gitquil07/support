import { useState } from "react";
import { customScrollBar, center_with_flex } from "styles";
import { InputGroup } from "../General/Wrappers";
import { RemoveButtonCrud } from "components/Buttons";
import styled from "styled-components";

type TOptions = {
    options: Option[],
    placeholder: string,
    elementRef?: any 
}

type Option = {
    value: string,
    label: string
}

type TIntrisicOption = Option & {id: number, selected: boolean};

export const OptionsInput = ({ options, placeholder, elementRef }: TOptions) => {

    const mutateOptions = (): TIntrisicOption[] => {
        return options.map((option: Option, idx: number) => {
            return {...option, id: idx, selected: false};
        });
    }

    const [systems, setSystems] = useState<TIntrisicOption[]>(mutateOptions());

    const changeSelection = (id: number): void => {
        const systemsCopy: TIntrisicOption[] = systems.slice(0);
        
        for(let i = 0; i < systemsCopy.length; i++){
            if(systemsCopy[i].id === id){
                systemsCopy[id].selected = !systemsCopy[id].selected;
            }
        }

        setSystems(systemsCopy);

    }

    const selected: TIntrisicOption[] = systems.filter(opt => opt.selected),
          notSelected: TIntrisicOption[] = systems.filter(opt => !opt.selected);

    return(
        <InputGroup offset="0">
            <HiddenSelect ref={elementRef} multiple>
                {
                    systems.map(({value, label, id, selected}) => <option key={id} value={value} { ...{ selected } }>{label}</option>)
                }
            </HiddenSelect>
            <AreaForOptions >
                {   
                    !selected.length? <Placeholder>{placeholder}</Placeholder> : selected.map(({id, label}) => <SelectedOption key={id}>{label}<RemoveButtonCrud onClick={() => changeSelection(id)} /></SelectedOption>)
                }
            </AreaForOptions>
            <OptionsList>
                Все системы
                {
                    notSelected.map(({id, label}) => <Option key={id} onClick={() => changeSelection(id)}>{label}</Option>)
                }
            </OptionsList>           
        </InputGroup>
    );

}


const AreaForOptions = styled.div`
    width: 100%;
    height: 48px;
    padding: 5px 16px;
    border: 1px solid ${({ theme }) => theme.colors.gray4};
    border-radius: 2px;
    ${ customScrollBar };
    overflow-X: auto;
    font-size: 15px;
    font-family: ${({ theme }) => theme.fonts.regular};
    background-color: ${({ theme }) => theme.colors.white};
    ${ center_with_flex };
    justify-content: flex-start;
    column-gap: 10px;

    div{
        margin-right: 5px; 
    }
`;

const Placeholder = styled.span`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.black40};
`;

const HiddenSelect = styled.select`
    display: none;
`;

const Option = styled.span`
    cursor: pointer;
    padding: 12px 24px;
    background-color: ${({ theme }) => theme.colors.primary7};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 18px;
    ${ center_with_flex };
`;

const SelectedOption = styled(Option)`
    padding: 5px 10px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.colors.primary8};
`;

const OptionsList = styled.div`
    ${ center_with_flex };
    column-gap: 20px;
    padding-right: 15px;
    justify-content: flex-start;
`;