import React from "react";
import { PageHeader } from "components/General";
import { GoBack } from "components/General";
import { FilterSelect } from "components/Inputs";
import { RegularInput } from "components/Inputs";
import { TextArea } from "components/Inputs";
import { FormAddButton, FormCloseButton, ConfirmDeleteButton } from "components/Buttons";
import { RowGroup, InlineGroup, BottomOffset } from "components/General/Wrappers";
import { Form } from "components/General/Form";
import { InputGroupHeader } from "components/General/Wrappers";
import { TMatch as TThemeEditProps } from "types";

const systems = [
    {
        label: "sys_1",
        value: "sys_1"
    }
];

const directions = [
    {
        label: "dir_1",
        value: "dir_1"
    }
];


const themes = [
    {
        id: 0,
        system: "sys_1",
        directions: "dir_1",
        theme: "theme",
        answer: "answer"
    },
    {
        id: 1,
        system: "sys_1",
        directions: "dir_1",
        theme: "theme",
        answer: "answer"
    },
    {
        id: 2,
        system: "sys_1",
        directions: "dir_1",
        theme: "theme",
        answer: "answer"
    },
    {
        id: 3,
        system: "sys_1",
        directions: "dir_1",
        theme: "theme",
        answer: "answer"
    },
    {
        id: 4,
        system: "sys_1",
        directions: "dir_1",
        theme: "theme",
        answer: "answer"
    }
];


type TQueryId = {
    id: number
}

type TOption = {
    value: string
    label: string
}

const Edit = ({ match }: TThemeEditProps<TQueryId>) => {

    const queryId: number = match.params.id;
    
    const selectedTheme = themes.find(theme => theme.id == queryId);

    const handleSubmit = (e: React.FormEvent): void => {
        const form = window.document.forms[0],
              formData = new FormData(form);

        const vals = formData.entries();
        
        for(let val of vals){
            console.log("key", val);
        }

        e.preventDefault();
    }

    const mapFunc = ({value, label}: TOption): React.ReactNode => <option { ...{ value } }>{label}</option>

    return (
        <>
            <BottomOffset>
                <GoBack text="Назад" />
            </BottomOffset>
            <PageHeader title="Добавить тему" alignment={queryId? "space-between" : "flex-start" }>
                {
                    queryId && <ConfirmDeleteButton name="Удалить" />
                }
            </PageHeader>
            <Form onSubmit={handleSubmit} fullWidth>
                <RowGroup>
                    <InlineGroup gap="72">
                        <FilterSelect name="system"  handleChange={() => {}}>
                            <option value="">Система</option>
                            {
                                systems.map(mapFunc)
                            }
                        </FilterSelect>
                        <FilterSelect name="directions" handleChange={() => {}}>
                            <option value="">Направления</option>
                            {
                                directions.map(mapFunc)
                            }
                        </FilterSelect>
                    </InlineGroup>
                </RowGroup>
                <RowGroup>
                    <InputGroupHeader title="Название темы" />
                    <RegularInput name="theme" value={selectedTheme?.theme ?? ""} placeholder="" />

                    <InputGroupHeader title="Ответ" />
                    <TextArea name="answer" value={selectedTheme?.answer ?? ""} onBlur={e => {}}/>

                    <InlineGroup gap="24">
                        <FormAddButton name="Добавить" />
                        <FormCloseButton name="Отменить" />
                    </InlineGroup>
                </RowGroup>
            </Form>
        </>
    );

}

export default Edit;