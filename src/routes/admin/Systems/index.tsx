import { PageHeader } from "components/General";
import { CrudTable } from "components/General";
import { AddButton }  from "components/Buttons";
import { useHistory } from "react-router-dom";
import { TMatch as TSystemEditProps } from "types";

const columns = [
    "Название системы",
    "Организации",
    "Ползьователи",
    "Направления"
];

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
    
];

const Systems = ({ match }: TSystemEditProps<any>) => {

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

export default Systems;