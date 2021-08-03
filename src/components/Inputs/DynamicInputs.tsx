import React from "react";
import { RowGroup } from "components/General/Wrappers";
import { RegularInputWithRm } from "components/Inputs";
import { InputGroupHeader } from "components/General/Wrappers";
import { AddInputButton } from "components/Buttons";
import { useAddRemove } from "hooks";

type TDynamicInputProps = {
    title: string
}

type TDynamicInputState = {
    value: string
}

/*
    DynamicInputs component
*/

export default ({ title }: TDynamicInputProps) => {

    const 
    { 
        list: directions,
        add: addInput, 
        remove: removeInput,
        handleBlur: handleDirectionInputBlur
    } 
    = useAddRemove<TDynamicInputState>([{value: ""}]);


    return (
        <RowGroup offset="0">
            <InputGroupHeader  { ...{ title } }>
                <AddInputButton name="Добавить" onClick={(e: React.MouseEvent<HTMLButtonElement>) => addInput(e)}/>
            </InputGroupHeader>
            {
                directions.map(({value}, idx) => 
                    <RegularInputWithRm name="systems" key={Math.random()} {...{ value } } placeholder="Направление" onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeInput(e, idx)} blur={(e: React.FocusEvent<HTMLInputElement>) => handleDirectionInputBlur(e, idx)} />
                )
            }
        </RowGroup>
    );

};

