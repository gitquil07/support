import { InputGroup, InlineGroup } from "components/General/Wrappers";
import { RegularInput } from "components/Inputs/TextInput";
import { OptionsInput } from "components/Inputs/Options";
import { CustomSelect } from "components/Inputs/CustomSelect";
import { FormAddBtn, FormCloseBtn } from "components/Buttons";
import { Form } from "components/General/Form";
import { useRef } from "react";

const options = [
    {
        label: "SAP",
        value: "SAP"
    },
    {
        label: "MES",
        value: "MES"
    },
    {
        label: "DIRECTUM RX",
        value: "DIRECTUM RX"
    },
    {
        label: "Active Directory",
        value: "Active Directory"
    },
    {
        label: "Bitrix 24",
        value: "Bitrix 24"
    }
];

const selectOptions = [
    {
        label: "Rate1",
        value: "Rate1"
    },
    {
        label: "Rate2",
        value: "Rate2"
    }
];

type TProps = {
    entry: TEntry | null
}

type TEntry = {
    id: number,
    organizationName: string
    system: Option[]
    rate: string
}

type Option = {
    value: string
    label: string
}

export const OrganizationForm = ({ entry }: TProps) => {

    const organizationNameV = useRef<HTMLInputElement>(null),
            systemV = useRef<HTMLSelectElement>(null),
            rateV = useRef<HTMLSelectElement>(null);
    
    const handleSubmit = (): void => {
        console.log("organizationNameV", organizationNameV.current?.value);
        console.log("systemV", systemV.current?.selectedOptions[0].value);
        console.log("rateV", rateV.current?.selectedIndex);
    }

    return (
        <Form>
            <InputGroup>
                <RegularInput value={entry?.organizationName} placeholder="Напишите название организации" elementRef={organizationNameV} />
                <OptionsInput placeholder="Добавить систему" elementRef={systemV} { ...{ options } } />
                <CustomSelect placeholder="Тариф" elementRef={rateV}>
                    {
                        selectOptions.map(({ value, label }) => <option {...{value}} selected={value == entry?.rate}>{label}</option>)
                    }
                </CustomSelect>
                <InlineGroup>
                    <FormAddBtn name="Добавить" onClick={() => handleSubmit()}/>
                    <FormCloseBtn name="Отменить" />
                </InlineGroup>
            </InputGroup>
        </Form>
    )
}