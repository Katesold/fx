import { Dispatch, SetStateAction } from "react";

export interface ResponseData {
    name: string;
    id: string;
    amount: number;
    currency: string;
    reference: string;
}

export interface TableProps {
    setIsValid: Dispatch<SetStateAction<boolean>>, 
    data: string[] 
    toastPopUp: (valid: boolean, indices: number[]) => void,
}

export interface TableHeadContainerProps {
    row: string[]
}

export interface TableContainerProps {
    data: string[]
}

export interface TableBodyContainerProps {
    rows: string[][]
}