export interface ResponseData {
    name: string;
    id: string;
    amount: number;
    currency: string;
    reference: string;
}

export interface TableProps {
    data: ResponseData[];
}