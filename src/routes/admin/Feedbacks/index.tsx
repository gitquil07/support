import React, { useState } from "react";
import styled from "styled-components";
import { PageHeader } from "components/General";
import { FilterSelect } from "components/Inputs";
import { GridWrapper } from "components/General/Wrappers";
import { DateRangePicker } from "components/General";
import { RowGroup } from "components/General/Wrappers"; 
import { BlueWrapper } from "components/General/Wrappers";
import { InlineGroup } from "components/General/Wrappers";
import { LongGrayButton } from "components/Buttons";


const consultants = [
    {
        value: "cons_1",
        label: "cons_1"
    }
];

const organizations = [
    {
        value: "org_1",
        label: "org_1"
    }
];

const feedbackMarks = [
    {
        value: "fdM_1",
        label: "fdM_1"
    }
];


type TFiltersState = {
    consultant: string
    organization: string
    feedbackMark: string
}

type TOption = {
    value: string
    label: string
}


const Feedbacks = () => {

    const [filters, setFilters] = useState<TFiltersState>({
        consultant: "",
        organization: "",
        feedbackMark: ""
    });

    const handleSelectChange = (e: React.FormEvent<HTMLSelectElement>) => {
        setFilters({
            ...filters,
            [e.currentTarget.name] : e.currentTarget.value
        })
    };

    const mapFunc = ({value, label}: TOption): React.ReactNode => <option key={Math.random()} {...{ value }}>{label}</option>;

    return (
        <> 
            <PageHeader title="Отзывы" alignment="flex-start" />
            <GridWrapper colGap="72" repetitionAmount="4" rowGap="0" size="1fr" offset="40">
                <FilterSelect name="consultant" handleChange={handleSelectChange}>
                    <option value="" selected>Консультант</option>
                    {
                        consultants.map(mapFunc)
                    }
                </FilterSelect>
                <FilterSelect name="organization" handleChange={handleSelectChange}>
                    <option value="" selected>Организация</option>
                    {
                        organizations.map(mapFunc)
                    }
                </FilterSelect>
                <FilterSelect name="feedbackMark" handleChange={handleSelectChange}>
                    <option value="" selected>Оценка отзыва</option>
                    {
                        feedbackMarks.map(mapFunc)    
                    }
                </FilterSelect>
                <DateRangePicker />
            </GridWrapper> 
            <RowGroup offset="40" gap="40">
                <BlueWrapper fullWidth>
                    Из-за этого сходства Робо взяли в свиту Наполеона. Рассказывают, что корсиканец после покушения на него в 1800 году ("адская машина") приказал подыскать себе двойников. Нашли четверых. Правда, один из них был от природы слабоумен, другой вскоре стал калекой, упав с лошади, третий – убит при таинственных обстоятельствах
                    <Row>
                        <FeedbackInfo>
                            <span className="desc">Клиент</span>
                            Шарипов Рашид
                        </FeedbackInfo>
                        <FeedbackInfo>
                            <span className="desc">Консультант</span>
                            Калонов Абдуллох
                        </FeedbackInfo>
                    </Row>
                </BlueWrapper>
                <BlueWrapper fullWidth>
                    Из-за этого сходства Робо взяли в свиту Наполеона. Рассказывают, что корсиканец после покушения на него в 1800 году ("адская машина") приказал подыскать себе двойников. Нашли четверых. Правда, один из них был от природы слабоумен, другой вскоре стал калекой, упав с лошади, третий – убит при таинственных обстоятельствах
                    <Row>
                        <FeedbackInfo>
                            <span className="desc">Клиент</span>
                            Шарипов Рашид
                        </FeedbackInfo>
                        <FeedbackInfo>
                            <span className="desc">Консультант</span>
                            Калонов Абдуллох
                        </FeedbackInfo>
                    </Row>
                </BlueWrapper>
                <BlueWrapper fullWidth>
                    Из-за этого сходства Робо взяли в свиту Наполеона. Рассказывают, что корсиканец после покушения на него в 1800 году ("адская машина") приказал подыскать себе двойников. Нашли четверых. Правда, один из них был от природы слабоумен, другой вскоре стал калекой, упав с лошади, третий – убит при таинственных обстоятельствах
                    <Row>
                        <FeedbackInfo>
                            <span className="desc">Клиент</span>
                            Шарипов Рашид
                        </FeedbackInfo>
                        <FeedbackInfo>
                            <span className="desc">Консультант</span>
                            Калонов Абдуллох
                        </FeedbackInfo>
                    </Row>
                </BlueWrapper>
                <BlueWrapper fullWidth>
                    Из-за этого сходства Робо взяли в свиту Наполеона. Рассказывают, что корсиканец после покушения на него в 1800 году ("адская машина") приказал подыскать себе двойников. Нашли четверых. Правда, один из них был от природы слабоумен, другой вскоре стал калекой, упав с лошади, третий – убит при таинственных обстоятельствах
                    <Row>
                        <FeedbackInfo>
                            <span className="desc">Клиент</span>
                            Шарипов Рашид
                        </FeedbackInfo>
                        <FeedbackInfo>
                            <span className="desc">Консультант</span>
                            Калонов Абдуллох
                        </FeedbackInfo>
                    </Row>
                </BlueWrapper>
                <BlueWrapper fullWidth>
                    Из-за этого сходства Робо взяли в свиту Наполеона. Рассказывают, что корсиканец после покушения на него в 1800 году ("адская машина") приказал подыскать себе двойников. Нашли четверых. Правда, один из них был от природы слабоумен, другой вскоре стал калекой, упав с лошади, третий – убит при таинственных обстоятельствах
                    <Row>
                        <FeedbackInfo>
                            <span className="desc">Клиент</span>
                            Шарипов Рашид
                        </FeedbackInfo>
                        <FeedbackInfo>
                            <span className="desc">Консультант</span>
                            Калонов Абдуллох
                        </FeedbackInfo>
                    </Row>
                </BlueWrapper>
            </RowGroup>
                <LongGrayButton name="Загрузить больще" />
        </>
    );
}

export default Feedbacks;

const FeedbackInfo = styled(InlineGroup)`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.regular};

    .desc{
        color: ${({ theme }) => theme.colors.black50};
    }

`;

const Row = styled.div`
    display: flex;
    column-gap: 40px;
    justify-content: flex-start;
    margin-top: 24px;
`;