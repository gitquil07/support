import { useState, useRef } from "react";
import styled from "styled-components";
import CalendarGreen from "assets/icons/calendarGreen.svg";
import moment from "moment";
import { SaveButton } from "components/Buttons";

/*
    DateRangePicker component
*/ 

export default () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const startDate = useRef<HTMLInputElement | null>(null);
    const endDate = useRef<HTMLInputElement | null>(null);

    const applyDateFilter = (): void => {
        console.log("startDate", startDate?.current?.value);
        console.log("endDate", endDate?.current?.value);
        setIsOpen(false);
    }
          
    return (
        <DatePickerWrapper>
            <DatePickerBtn onClick={() => setIsOpen(!isOpen)}>
                <img src={CalendarGreen} alt="calendar" />
                <span>
                    Фильтр даты
                </span>
            </DatePickerBtn>
            {
                isOpen && <DatePickerBody>
                            <label>
                                Начало периода:
                                <input type="date" defaultValue={moment().startOf("month").format("DD.MM.YYYY")} ref={startDate} />
                            </label>
                            <label>
                                Конец периода:
                                <input type="date" defaultValue={moment(Date.now()).format("DD.MM.YYYY")} ref={endDate} />
                            </label>
                            <SaveButton name="применить" onClick={applyDateFilter} />
                        </DatePickerBody>
            }
        </DatePickerWrapper>
    );

}


const DatePickerWrapper = styled.div`
    position: relative;
`;

const DatePickerBtn = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        margin-right: 7.6px;
    }

    span {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.black};
        font-weight: 500;
        font-family: ${({ theme }) => theme.fonts.medium};
    }
`;

const DatePickerBody = styled.div`
    width: 220px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border: 1px solid ${({ theme }) => theme.colors.gray1};
    position: absolute;
    z-index: 1;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    font-weight: 600;

    label {
        font-size: 14px;
        margin-bottom: 5px;
    }

    input {
        width: 100%;
        height: 30px;
        margin-top: 2px;
    }
`;
