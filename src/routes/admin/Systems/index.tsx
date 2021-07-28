import { PageHeader } from "components/General/PageHeader";
import { CrudTable } from "components/General/CrudTable";
import { AddButton }  from "components/Buttons";
import { useHistory } from "react-router-dom";

type TProps = {
    match: TMatch
}

type TMatch = {
    isExact: boolean
    params: any
    url: string,
    path: string
}

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

const System = ({ match }: TProps) => {

    const url: string = match.url;

    const history = useHistory();

    const goToCreate = (): void => history.push(`${url}/create`);

    return (
        <>
            <PageHeader title="Список систем" alignment="space-between">
                <AddButton name="Добавить новую систему" onClick={goToCreate}/>
            </PageHeader>
            <CrudTable { ...{ columns, data, url } } />
        </>
    );

}

export default System;