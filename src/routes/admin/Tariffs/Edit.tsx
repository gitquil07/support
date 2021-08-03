import { PageHeader } from "components/General";
import { GoBack } from "components/General";
import { CustomSelect } from "components/Inputs";
import { GridWrapper, BlueWrapper, BlueWrapperWithClose, BottomOffset } from "components/General/Wrappers";
import { RowGroup, InlineGroup, InputLabel } from "components/General/Wrappers";
import { Form } from "components/General/Form";
import { RegularInput } from "components/Inputs";
import { FormAddButton, FormCloseButton } from "components/Buttons";
import { useAddRemove } from "hooks";
import styled from "styled-components";
import React from "react";

type TTariffEditProps = {
    match: {
        isExact: boolean
        url: string
        path: string
        params: {
            id: number
        }
    }
}

type TTariffState = {
    tariffName: string
    limit: string
    price: string
}

const Edit = ({ match }: TTariffEditProps) => {

    const id: number = match.params.id;

    const 
    {
        list: tariffs,
        remove: removeTariff,
        handleBlur: handleTariffInputBlur
    }
    = useAddRemove<TTariffState>([{tariffName: "", limit: "", price: ""}]);

    const handleSubmit = (e: React.SyntheticEvent): void => {

        e.preventDefault();
        
    }

    return(
        <>
            <BottomOffset>
                <GoBack text="Назад" />
            </BottomOffset>
            <PageHeader title="Тарифы SAP" alignment="flex-start" />
            <RowGroup offset="0">
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <RowGroup>
                        <InlineGroup>
                            <FixedWidthText>
                                Активный план
                            </FixedWidthText>
                            <CustomSelect name="tariffHours" placeholder="">
                                <option>Часовой тариф</option>
                            </CustomSelect>
                        </InlineGroup>
                        <GridWrapper repetitionAmount="3" size="1fr" colGap="32" rowGap="32" offset="8">
                            <BlueWrapper width="345">
                                <RowGroup offset="0">
                                    <CardName>Часовой тариф</CardName>
                                    <InputLabel>
                                        <label>Цена за час (USD)</label>
                                        <RegularInput name="" placeholder="" value="" />
                                    </InputLabel>
                                </RowGroup>
                            </BlueWrapper>
                            {
                                tariffs.map(({tariffName, limit, price}, idx) =>
                                    <BlueWrapperWithClose onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeTariff(e, idx)}>
                                        <RowGroup offset="0">
                                            <InputLabel>
                                                <label>Название тарифа</label>
                                                <RegularInput name="tariffName" placeholder="" value={tariffName} blur={(e: React.FocusEvent<HTMLInputElement>) => handleTariffInputBlur(e, idx)} />
                                            </InputLabel>
                                            <InputLabel>
                                                <label>Месячный лимит (час)</label>
                                                <RegularInput name="limit" placeholder="" value={limit} blur={(e: React.FocusEvent<HTMLInputElement>) => handleTariffInputBlur(e, idx)}/>
                                            </InputLabel>
                                            <InputLabel>
                                                <label>Цена (USD)</label>
                                                <RegularInput name="price" placeholder="" value={price} blur={(e: React.FocusEvent<HTMLInputElement>) => handleTariffInputBlur(e, idx)}/>
                                            </InputLabel>
                                        </RowGroup>
                                    </BlueWrapperWithClose>
                                )
                            }
                        </GridWrapper>
                        <InlineGroup>
                            <FormAddButton name="Изменить сохранения" />
                            <FormCloseButton name="Отменить" /> 
                        </InlineGroup>
                    </RowGroup>
                </Form>
            </RowGroup>
        </>
    );

}

export default Edit;

const FixedWidthText = styled.span`
    width: 143px;
    line-height: 48px;
`;

const CardName = styled.h5`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.visbyMedium};
    text-transform: uppercase;
`;