import { useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContext } from '../../App';
import { StyledTable, StyledContainer, TableBody, TableData, TableHead, TableHeader, TableHeaderRow, TableRow } from './styles';
import { TableBodyContainer } from './TableBodyContainer';
import { TableHeadContainer } from './TableHeadContainer';
import { ResponseData, TableProps } from './types';

const Msg = () => {
    return (
        <>
            <h3>Payment Successful</h3>
            <p> Payments are processing. You will be notified when they are ready</p>
        </>
    )
}

export const Table = ({ setIsValid }: { setIsValid: Function }) => {
    const ctxData = useContext(AppContext);
    const [data, setData] = useState([] as string[][]);
    const [headerData, setHeaderData] = useState([] as string[][]);

    const showToastMsg = () => {
        toast.success('Successfully uploaded file', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    useEffect(() => {
        const dataRow: string[][] = [];
        const headerRow: string[][] = [];
        let valid = true;
        ctxData?.data.forEach((row, index) => {
            const splitToArrData = row.split(',');
            if (!splitToArrData.includes('')) {
                if (index == 0) {
                    headerRow.push(splitToArrData);
                } else {
                    dataRow.push(splitToArrData);
                }
                setData(dataRow);
                setHeaderData(headerRow);
            } else if (splitToArrData.length !== 1) {
                valid = false;
                toast.error(`The file contains incorrect data on the ${index + 1}th line`, {
                    position: toast.POSITION.TOP_CENTER,
                 hideProgressBar: true, 
                 className: 'toastErrorsBg'
                });
            }
            setIsValid(valid);
        });
        if (valid) {
            toast.success(<Msg />, { hideProgressBar: true, className: 'toastSuccessBg' });
        }
    }, [ctxData]);

    return (
        <>
            <StyledTable>
                {data.length > 0 ? (
                    <>
                        <TableHeadContainer row={headerData} />
                        <TableBodyContainer rows={data} />
                    </>
                ) : null}
            </StyledTable>
            <StyledContainer theme="colored" />
        </>
    )
};