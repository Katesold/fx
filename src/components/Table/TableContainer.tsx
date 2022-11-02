import { useState, memo } from "react";
import { Button } from "../Button/Button"
import { Table } from "./Table"
import { StyledContainer, StyledTableContainer } from './styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Msg = memo(() => {
    return (
        <>
            <h3>Payment Successful</h3>
            <p> Payments are processing. You will be notified when they are ready</p>
        </>
    )
});

export const TableContainer = memo(({ data } : { data: string[] }) => {
    const [isValid, setIsValid] = useState(false);

    const toastPopUp = (valid: boolean, indices: number[]) => {
        if(!valid) {
            toast.error(`The file contains incorrect data on the ${indices.map((index) => index+1)}th row`, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                className: 'toastErrorsBg',
            });
        } else {
            toast.success(<Msg />, { hideProgressBar: true, className: 'toastSuccessBg' });
        }
    };

    return (
        <StyledTableContainer>
            <Table setIsValid={setIsValid} data={data} toastPopUp={toastPopUp}/>
            {isValid ? <Button text='Submit' /> : <Button disabled text='Submit' />}
            <StyledContainer theme="colored" />
        </StyledTableContainer>
    )
});