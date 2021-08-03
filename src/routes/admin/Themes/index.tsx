import React from "react";
import { FilterSelect } from "components/Inputs";
import { PageHeader } from "components/General";
import { AddButton } from "components/Buttons";
import { CrudTable } from "components/General";
import { useHistory } from "react-router-dom";
import { GridWrapper } from "components/General/Wrappers";

const systems = [
    {
        value: "system",
        label: "Система"
    }
];

const directions = [
    {
        value: "directions",
        label: "Направления"
    }
];

const columns = [
    "Отзывы"
]; 

const data = [
    {
        feedback: "Feedback"
    },
    {
        feedback: "Feedback"
    },
    {
        feedback: "Feedback"
    },
    {
        feedback: "Feedback"
    }
];


type TThemesProps = {
    match: TMatch
}

type TMatch = {
    isExact: false
    path: string
    url: string
    params: any
}

type TOption = {
    value: string
    label: string
}

const Themes = ({ match } : TThemesProps) => {

    const url: string = match.url;
    
    const history = useHistory();

    const mapFunc = ({value, label}: TOption): React.ReactNode => <option key={Math.random()} { ...{ value } }>{label}</option>;

    const goToAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
        history.push(`${url}/create`);
        e.preventDefault();
    };

    return (
        <>
            <PageHeader title="Темы" alignment="space-between">
                <AddButton name="Добавить новую тему" onClick={goToAdd} />
            </PageHeader>
            <GridWrapper colGap="72" rowGap="0" offset="28" repetitionAmount="2" size=".2fr" >
                <FilterSelect name="sd" handleChange={e => {}} >
                    <option value="" selected>Система</option>
                    {
                        systems.map(mapFunc)
                    }
                </FilterSelect>
                <FilterSelect name="" handleChange={e => {}}>
                    <option value="" selected>Направление</option>
                    {
                        directions.map(mapFunc)
                    }
                </FilterSelect>
            </GridWrapper>
            <CrudTable { ...{ columns, data, url } } />
        </>
    );

}

export default Themes;
