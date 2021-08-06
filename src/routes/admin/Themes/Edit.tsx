import { PageHeader } from "components/General";
import { GoBack } from "components/General";
import { FilterSelect } from "components/Inputs";
import { RegularInput } from "components/Inputs";
import { FormAddButton, FormCloseButton } from "components/Buttons";
import { RowGroup, InlineGroup, BottomOffset } from "components/General/Wrappers";
import { Form } from "components/General/Form";
import { InputGroupHeader } from "components/General/Wrappers";

const Edit = () => {


    return (
        <>
            <BottomOffset>
                <GoBack text="Назад" />
            </BottomOffset>
            <PageHeader title="Добавить тему" alignment="flex-start" />
            <Form>
                <InlineGroup>
                    <FilterSelect name="system"  handleChange={() => {}}>

                    </FilterSelect>
                    <FilterSelect name="directions" handleChange={() => {}}>

                    </FilterSelect>
                </InlineGroup>
                <RowGroup>
                    <InputGroupHeader title="Название темы" />
                    <RegularInput name="theme" value="" placeholder="" />
                </RowGroup>
            </Form>
        </>
    );

}

export default Edit;