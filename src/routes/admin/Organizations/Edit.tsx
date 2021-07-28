import { OrganizationForm } from "components/Forms/OrganizationForm";
import { PageHeader } from "components/General/PageHeader";
import { GoBack } from "components/General/Back";
import { BottomOffset } from "components/General/Wrappers";

type TProps = {
    match: TMatch
};

type TMatch = {
    isExact: boolean,
    params: any,
    url: string,
    path: string
};

const data = [
    {
        id: 0,
        organizationName: "Завод газовых плит и мини печей",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 1,
        organizationName: "ARTEL Торговый Дом ",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 2,
        organizationName: "Завод Штамповки",
        rate: "Rate2",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 3,
        organizationName: "Лампа Торговый Дом",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 4,
        organizationName: "ARTEL Экспорт",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 5,
        organizationName: "Торговый Дом Запчастей",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 6,
        organizationName: "Сервис Центр",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 7,
        organizationName: "Завод Вытяжек",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 8,
        organizationName: "Завод Газовых котлов",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 9,
        organizationName: "Завод газовых плит и мини печей",
        rate: "Rate2",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 10,
        organizationName: "ARTEL Торговый Дом ",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 11,
        organizationName: "Завод Штамповки",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 12,
        organizationName: "Лампа Торговый Дом",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 13,
        organizationName: "ARTEL Экспорт",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 14,
        organizationName: "Торговый Дом Запчастей",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 15,
        organizationName: "Сервис Центр",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 16,
        organizationName: "Завод Вытяжек",
        rate: "Rate1",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    {
        id: 17,
        organizationName: "Завод Газовых котлов",
        rate: "Rate2",
        system: [
            {
                value: "SAP",
                label: "SAP"
            },
            {
                value: "MES",
                label: "MES"    
            }
        ]
    },
    
];

const Edit = ({ match }: TProps) => {

    const queryId: number = match.params.id;

    const updatedEntry = data.find(({ id }) => id == queryId) || null;

    return (
        <>
            <BottomOffset>
                <GoBack text="Список организаций" />
            </BottomOffset>
            <PageHeader title="Детали об организации" alignment="flex-start" />
            <OrganizationForm entry={updatedEntry}/>
        </>
    );

}

export default Edit