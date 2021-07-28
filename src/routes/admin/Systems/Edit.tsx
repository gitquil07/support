import { PageHeader } from "components/General/PageHeader";
import { GoBack } from "components/General/Back";
import { BottomOffset } from "components/General/Wrappers";

const SystemEdit = () => {

    return (
        <>
            <BottomOffset>
                <GoBack text="Список систем" />
            </BottomOffset>
            <PageHeader title="Добавление новой системы" alignment="flex-start" />
        </>
    );

}

export default SystemEdit;