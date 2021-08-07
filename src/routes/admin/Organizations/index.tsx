import { useState } from "react";
import { PageHeader } from "components/General";
import { AddButton } from "components/Buttons"; 
import { CrudTable } from "components/General";
import { OrganizationForm } from "components/Forms/OrganizationForm";
import { TMatch as TOrganizationsProps } from "types";

const columns = [
    "Имя организации",
    "Ползователи",
    "Системы"
];

const data = [
    {
        id: 0,
        name: "Завод газовых плит и мини печей",
        user: "213",
        system: 5
    },
    {
        id: 1,
        name: "ARTEL Торговый Дом ",
        user: "12",
        system: 2
    },
    {
        id: 2,
        name: "Завод Штамповки",
        user: "45",
        system: 2
    },
    {
        id: 3,
        name: "Лампа Торговый Дом",
        user: "23",
        system: 2
    },
    {
        id: 4,
        name: "ARTEL Экспорт",
        user: "78",
        system: 2
    },
    {
        id: 5,
        name: "Торговый Дом Запчастей",
        user: "232",
        system: 2
    },
    {
        id: 6,
        name: "Сервис Центр",
        user: "896",
        system: 2
    },
    {
        id: 7,
        name: "Завод Вытяжек",
        user: "123",
        system: 2
    },
    {
        id: 8,
        name: "Завод Газовых котлов",
        user: "667",
        system: 2
    },
    {
        id: 9,
        name: "Завод газовых плит и мини печей",
        user: "213",
        system: 5
    },
    {
        id: 10,
        name: "ARTEL Торговый Дом ",
        user: "12",
        system: 2
    },
    {
        id: 11,
        name: "Завод Штамповки",
        user: "45",
        system: 2
    },
    {
        id: 12,
        name: "Лампа Торговый Дом",
        user: "23",
        system: 2
    },
    {
        id: 13,
        name: "ARTEL Экспорт",
        user: "78",
        system: 2
    },
    {
        id: 14,
        name: "Торговый Дом Запчастей",
        user: "232",
        system: 2
    },
    {
        id: 15,
        name: "Сервис Центр",
        user: "896",
        system: 2
    },
    {
        id: 16,
        name: "Завод Вытяжек",
        user: "123",
        system: 2
    },
    {
        id: 17,
        name: "Завод Газовых котлов",
        user: "667",
        system: 2
    },
    
]

const Organizations = ({ match }: TOrganizationsProps<any>) => {

    const url: string = match.url;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = (): void => setIsOpen(!isOpen);

    return (
        <>
            <PageHeader title="Список организаций" alignment="space-between">
                <AddButton name={isOpen? "Закрыть форму" : "Добавить новую организацию"} onClick={toggle} { ...{ isOpen } } />
            </PageHeader>
            {
                isOpen && <OrganizationForm entry={null}/>
            }
            <CrudTable
                { ...{ columns, data, url } }
            />
        </>
    );

}

export default Organizations;