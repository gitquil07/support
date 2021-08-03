import { DateRangePicker } from "components/General";
import { PageHeader } from "components/General";
import { GridWrapper } from "components/General/Wrappers";
import { LongGrayButton } from "components/Buttons";
import { Search } from "components/General";
import styled from "styled-components";
import moment from "moment";
import { formatTime } from "utils/functions";

const applicationList = [
    {
        id: 0,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 1,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 2,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 3,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 4,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 5,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 6,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 7,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 8,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 9,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 10,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    },
    {
        id: 11,
        cardNumber: "0000022",
        date: Date.now(),
        applicantName: "Client name",
        messagesAmount: 12,
        text: "Необходимо исправить проблемы с базой данных в производственной панели",
        time: Date.now(),
        status: "В работе" 
    }
];


const Applications = () => {

    return (
        <>
            <PageHeader title="Заявки" alignment="space-between">
                <Search />
                <DateRangePicker />
            </PageHeader>
            <GridWrapper repetitionAmount="3" size="1fr" rowGap="40" colGap="40">
                {
                    applicationList.map((application) => 
                        <CardWithShadow key={application.id}>
                            <CardHeader>
                                <CardNumber>{application.cardNumber}</CardNumber>
                                <CardDetails>
                                    <CardDetail>{moment(application.date).format("DD-MM-YYYY")}</CardDetail>
                                    <CardDetail>{application.applicantName}</CardDetail>
                                    <CardGroupDetails>
                                        <Badge>{application.messagesAmount}</Badge>
                                        <CardDetail>Сообщений</CardDetail>
                                    </CardGroupDetails>
                                </CardDetails>
                            </CardHeader>
                            <CardBody>
                                <CardContent>{application.text}</CardContent>
                                <CardDetails>
                                    <CardDetail>{formatTime(moment(application.time).format("HH:mm"))}</CardDetail>
                                    <CardDetail>{application.status}</CardDetail>
                                </CardDetails>
                            </CardBody>
                        </CardWithShadow>
                    )
                }
            </GridWrapper>
            <LongGrayButton name="Загрузить больше" />
        </>
    );

}


type TCardDetailsProps = {
    itemOffset?: string,
    isOffsetTop?: boolean
};

const CardWithShadow = styled.div`
    width: 100%;
    min-width: 383.33.px;
    box-shadow: 0 10px 20px rgba(65, 65, 65, 0.11);
    border-radius: 5px;
`;

const CardHeader = styled.div`
    padding: 16px 16px 18px 16px;
    background-color: ${({ theme }) => theme.colors.greenerGray};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CardNumber = styled.h2`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-weight: 700;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.cardGray};
    margin-bottom: 10px;
`;

const CardDetail = styled.span`
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black};
`;

const Badge = styled.span`
    padding: 2px 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.greenNatural};
`;

const CardDetails = styled.div<TCardDetailsProps>`
    margin-top: 8px;
    span {
        margin-right: 10px;
    }
`;

const CardGroupDetails = styled.span`
    span {
        margin-right: 5px;
    }
`;

const CardBody = styled.div`
    padding: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;


const CardContent = styled.p`
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 100;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.black};
`;


export default Applications;