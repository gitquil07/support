import { InputGroup, InlineGroup } from "components/General/Wrappers";
import { RegularInput } from "components/Inputs";
import { OptionsInput } from "components/Inputs/Options";
import { CustomSelect } from "components/Inputs";
import { FormAddButton, FormCloseButton } from "components/Buttons";
import { Form } from "components/General/Form";
import React from "react";

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

type TOrganizationFormProps = {
    entry: TEntry | null
}

type TEntry = {
    id: number,
    organizationName: string
    system: TOption[]
    rate: string
}

type TOption = {
    value: string
    label: string
}

export const OrganizationForm = ({ entry }: TOrganizationFormProps) => {
    
    const handleSubmit = (e: React.SyntheticEvent): void => {

        e.preventDefault();

    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)} fullWidth>
            <InputGroup>
                <RegularInput name="organizationName" value={entry?.organizationName ?? ""} placeholder="Напишите название организации" />
                <OptionsInput placeholder="Добавить систему" { ...{ options } } />
                <CustomSelect placeholder="Тариф" name="tariff">
                    {
                        selectOptions.map(({ value, label }) => <option {...{value}} selected={value == entry?.rate}>{label}</option>)
                    }
                </CustomSelect>
                <InlineGroup>
                    <FormAddButton name="Добавить" />
                    <FormCloseButton name="Отменить" />
                </InlineGroup>
            </InputGroup>
        </Form>
    )
}