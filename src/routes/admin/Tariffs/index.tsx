import { PageHeader } from "components/General";
import { CrudTable } from "components/General";
import { AddButton } from "components/Buttons";
import { useHistory } from "react-router-dom"; 

const columns = [
    "Название системы"
];

const data = [
    {
        id: 0,
        name: "Завод газовых плит и мини печей"
    },
    {
        id: 1,
        name: "ARTEL Торговый Дом "
    },
    {
        id: 2,
        name: "Завод Штамповки"
    },
    {
        id: 3,
        name: "Лампа Торговый Дом"
    },
    {
        id: 4,
        name: "ARTEL Экспорт"
    },
    {
        id: 5,
        name: "Торговый Дом Запчастей"
    },
    {
        id: 6,
        name: "Сервис Центр"
    },
    {
        id: 7,
        name: "Завод Вытяжек"
    },
    {
        id: 8,
        name: "Завод Газовых котлов"
    },
    {
        id: 9,
        name: "Завод газовых плит и мини печей"
    },
    {
        id: 10,
        name: "ARTEL Торговый Дом "
    },
    {
        id: 11,
        name: "Завод Штамповки"
    },
    {
        id: 12,
        name: "Лампа Торговый Дом"
    },
    {
        id: 13,
        name: "ARTEL Экспорт"
    },
    {
        id: 14,
        name: "Торговый Дом Запчастей"
    },
    {
        id: 15,
        name: "Сервис Центр"
    },
    {
        id: 16,
        name: "Завод Вытяжек"
    },
    {
        id: 17,
        name: "Завод Газовых котлов"
    },
    
];

type TTariffsProps = {
    match: TMatch
}

type TMatch = {
    isExact: boolean
    params: any
    url: string
    path: string
};

const Tariffs = ({ match }: TTariffsProps) => {

    const url: string = match.url;

    const history = useHistory();

    const goToCreate = (): void => history.push(`${url}/create`);

    return (
        <>
            <PageHeader title="Тарифы по системам" alignment="space-between">
                <AddButton name="Добавить новый тариф" onClick={goToCreate}/> 
            </PageHeader>
            <CrudTable {...{ columns, data, url }} editOnly/>
        </>
    );

};

export default Tariffs;