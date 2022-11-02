import { useEffect, useState } from 'react';
import { StyledTable, TableHead, TableHeaderRow } from './styles';
import { TableProps } from './types';

export const Table: React.FC<TableProps> = ({ data }) => {
    const [paymentData, setPaymentData] = useState([]);

    useEffect(() => {
        setPaymentData(data);
    }, [data]);

    return (
        <StyledTable>
            {paymentData.map(row => {
                <TableHead>
                    <TableHeaderRow>
                        <TableHead>{row}</TableHead>
                    </TableHeaderRow>
                </TableHead>
            }) : null}
        </StyledTable>
    )
};