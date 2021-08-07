import React from "react";
import { PageHeader } from "components/General";
import { GoBack } from "components/General";
import { BottomOffset } from "components/General/Wrappers";
import { Form } from "components/General/Form";
import { RowGroup } from "components/General/Wrappers";
import { RegularInput, CustomSelect } from "components/Inputs";
import { InlineGroup, InputLabel } from "components/General/Wrappers";
import { FormAddButton, FormCloseButton } from "components/Buttons";
import { BlueWrapper } from "components/General/Wrappers";
import { TMatch  as TTariffCreateProps } from "types";

const TariffEdit = ({ match }: TTariffCreateProps<any>) => {

    const queryId: number = match.params.id;

    const handleSubmit = (e: React.SyntheticEvent) => {
        const form = window.document.querySelector("form[name='form']") as HTMLFormElement;
        const formData = new FormData(form);
        const iter = formData.entries();

        for(let fields of iter){
            console.log("fields", fields);
        }

        e.preventDefault();
    }

    return (
        <>
            <BottomOffset>
                <GoBack text="Назад" />
            </BottomOffset>
            <RowGroup>
                <PageHeader title="Добавить тариф" alignment="flex-start" />
                <Form name="form" onSubmit={handleSubmit}>
                    <BlueWrapper>
                        <RowGroup>
                            <InputLabel>
                                <label>Название тарифа</label>
                                <RegularInput name="tariff" placeholder="" value="" />
                            </InputLabel>
                            <InputLabel>
                                <label>Выберите статус</label>
                                <CustomSelect name="status" placeholder="" fullWidth>
                                    <option value="SAP">SAP</option>
                                    <option value="MES">MES</option>
                                </CustomSelect>
                            </InputLabel>
                            <InputLabel>
                                <label>Месячный лимит (час)</label>
                                <RegularInput name="limit" placeholder="" value="" />
                            </InputLabel>
                            <InputLabel>
                                <label>Цена (USD)</label>
                                <RegularInput name="price" placeholder="" value="" />
                            </InputLabel>
                            <InlineGroup>
                                <FormAddButton name={queryId? "Сохранить изменения" : "Добавить"} />
                                <FormCloseButton name="Отменить" />
                            </InlineGroup>
                        </RowGroup>
                    </BlueWrapper>
                </Form>
            </RowGroup>
        </>
    );

}

export default TariffEdit;