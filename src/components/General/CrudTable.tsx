import { useState } from "react";
import styled from "styled-components";
import { RemoveButtonCrud, EditButtonCrud, ConfirmDeleteButton } from "components/Buttons";
import { customScrollBar } from "styles";
import { center_with_flex } from "styles";
import { useHistory } from "react-router-dom";

type TCrudTableProps = {
    columns: any,
    data: any,
    url: string,
    editOnly?: boolean
}

/*
    CrudTable component
*/ 

export default ({ columns, data, url, editOnly }: TCrudTableProps) => {

    const history = useHistory();

    const [isOpen, setIsOpen] = useState<boolean>(false),
          [selectedEntryId, setSelectedEntryId] = useState<number | undefined>(undefined);
    
    const columnsAmount: number = columns.length - 1;

    const toggle = (id: number): void => {
        setSelectedEntryId(id);
        setIsOpen(!isOpen);
    };

    const editEntry = (id: number): void => {
        history.push(`${url}/edit/${id}`);
    }


    return (
        <CustomTable>
            <TableHeader repetitionAmount={columnsAmount}>
                {
                    columns.map((column: any) => 
                        <Col>{column}</Col>        
                    )
                }
            </TableHeader>
            <TableBody>
                {
                    data.map((item: any, idx: number) => 
                        <Row key={idx} repetitionAmount={columnsAmount}>
                            {
                                Object.keys(item).map((key, idx) => 
                                    (key !== "id")?
                                        <span key={idx}>{item[key]}</span> : null
                                    
                                )
                            }
                            {
                                <span>
                                    {
                                        (isOpen && item.id === selectedEntryId)? <ConfirmDeleteButton name="Подтвердите удаление" onClick={() => {}} /> : <EditButtonCrud onClick={() => editEntry(item.id)}/>
                                    }
                                    {
                                        !editOnly? <RemoveButtonCrud onClick={() => toggle(item.id)} /> : null
                                    }
                                </span>

                            }
                        </Row>
                    )
                }
            </TableBody>
        </CustomTable>
    );

}


type TAmount = {
    repetitionAmount: number
}

const CustomTable = styled.div`
    margin-top: 40px;
    position: relative;
    height: calc(100vh - 350px);
    overflow-y: scroll;

    ${ customScrollBar }
`;

const TableHeader = styled.div<TAmount>`
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    width: 100%;
    display: grid;
    grid-template-columns: 1.2fr repeat(${({ repetitionAmount }) => repetitionAmount}, 1fr) 1.2fr;
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.gray2};
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    div:first-child{
        padding-left: 8px;
    }
`;

const Col = styled.div`
    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black};
`;

const TableBody = styled.div`
    padding: 24px;
`;

const Row = styled.div<TAmount>`
    display: grid;
    grid-template-columns: 1.2fr repeat(${({ repetitionAmount }) => repetitionAmount}, 1fr) 1.2fr;
    border-bottom: 1px dashed ${({ theme }) => theme.colors.gray3};
    padding: 16px 0;
    font-size: 18px;

    span:last-child{
        ${ center_with_flex };
        position: relative;
        justify-content: flex-end;
    }
`;



