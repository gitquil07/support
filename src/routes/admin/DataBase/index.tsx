import React from "react";
import { PageHeader, Tabs } from "components/General";
import { AddButton } from "components/Buttons";
import { TMatch as TDataBaseProps } from "types";


const DataBase = ({ match }: TDataBaseProps<any>) => {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {}

    return (
        <>
            <PageHeader title="База знаний" alignment="space-between" >
                <AddButton name="Добавить знания" onClick={handleClick}/>
            </PageHeader>
            <Tabs>
                
            </Tabs>
        </>
    );

}

export default DataBase;