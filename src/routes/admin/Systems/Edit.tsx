import { PageHeader } from "components/General";
import { GoBack } from "components/General";
import { BottomOffset } from "components/General/Wrappers";
import { Form } from "components/General/Form";
import { RowGroup } from "components/General/Wrappers";
import { RegularInput } from "components/Inputs";
import { DynamicInputs } from "components/Inputs";
import { InputGroupHeader } from "components/General/Wrappers";
import { InlineGroup } from "components/General/Wrappers";
import { FormAddButton, FormCloseButton } from "components/Buttons";
import React from "react";

const data = [
    {
        id: 0,
        name: "Завод газовых плит и мини печей",
        organization: "213",
        users: 5,
        directions: 3
    },
    {
        id: 1,
        name: "ARTEL Торговый Дом ",
        organization: "12",
        users: 2,
        directions: 3
    },
    {
        id: 2,
        name: "Завод Штамповки",
        organization: "45",
        users: 2,
        directions: 3
    },
    {
        id: 3,
        name: "Лампа Торговый Дом",
        organization: "23",
        users: 2,
        directions: 3
    },
    {
        id: 4,
        name: "ARTEL Экспорт",
        organization: "78",
        users: 2,
        directions: 3
    },
    {
        id: 5,
        name: "Торговый Дом Запчастей",
        organization: "232",
        users: 2,
        directions: 3
    },
    {
        id: 6,
        name: "Сервис Центр",
        organization: "896",
        users: 2,
        directions: 3
    },
    {
        id: 7,
        name: "Завод Вытяжек",
        organization: "123",
        users: 2,
        directions: 3
    },
    {
        id: 8,
        name: "Завод Газовых котлов",
        organization: "667",
        users: 2,
        directions: 3
    },
    {
        id: 9,
        name: "Завод газовых плит и мини печей",
        organization: "213",
        users: 5,
        directions: 3
    },
    {
        id: 10,
        name: "ARTEL Торговый Дом ",
        organization: "12",
        users: 2,
        directions: 3
    },
    {
        id: 11,
        name: "Завод Штамповки",
        organization: "45",
        users: 2,
        directions: 3
    },
    {
        id: 12,
        name: "Лампа Торговый Дом",
        organization: "23",
        users: 2,
        directions: 3
    },
    {
        id: 13,
        name: "ARTEL Экспорт",
        organization: "78",
        users: 2,
        directions: 3
    },
    {
        id: 14,
        name: "Торговый Дом Запчастей",
        organization: "232",
        users: 2,
        directions: 3
    },
    {
        id: 15,
        name: "Сервис Центр",
        organization: "896",
        users: 2,
        directions: 3
    },
    {
        id: 16,
        name: "Завод Вытяжек",
        organization: "123",
        users: 2,
        directions: 3
    },
    {
        id: 17,
        name: "Завод Газовых котлов",
        organization: "667",
        users: 2,
        directions: 3
    },
    
]


type TSystemEditProps = {
    match: TMatch
}

type TMatch = {
    isExact: boolean,
    params: any,
    url: string,
    path: string
}

const SystemEdit = ({ match }: TSystemEditProps) => {

    const queryId: number = match.params.id;

    const entry = data.find(item => item.id == queryId);
    console.log("entry", entry);

    const handleSubmit = (e: React.SyntheticEvent): void => {
        const form = window.document.querySelector("form[name='form']") as HTMLFormElement;
        const formData = new FormData(form);
        const iter = formData.entries();
        for(let i of iter){
            console.log(i);
        }
        e.preventDefault();
    }

    return (
        <>
            <BottomOffset>
                <GoBack text="Список систем" />
            </BottomOffset>
            <PageHeader title="Добавление новой системы" alignment="flex-start" />
            <Form name="form" onSubmit={(e) => handleSubmit(e)}>
                <RowGroup>
                    <RegularInput name="system" value={entry?.name ?? ""} placeholder="Система" />
                    <DynamicInputs title="Направления" />
                    <InputGroupHeader title="Цена обслуги за час (USD)" />
                    <RegularInput name="summ" value="" placeholder="Введите сумму" />
                    <InlineGroup>
                        <FormAddButton name={queryId? "Сохранить изменения" : "Сохранить"} />
                        <FormCloseButton name="Отменить" />
                    </InlineGroup>
                </RowGroup>
            </Form>
        </>
    );

}

export default SystemEdit;