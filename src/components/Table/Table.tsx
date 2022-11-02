import { memo, useCallback, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { StyledTable } from './styles';
import { TableBodyContainer } from './TableBodyContainer';
import { TableHeadContainer } from './TableHeadContainer';

export const Table = memo(({ setIsValid, data, toastPopUp }: { setIsValid: Function, data: string[], toastPopUp: Function }) => {
    const [tableDataBoth, setTableDataBoth] = useState([] as string[][][]);

    const calulateTableValues = useCallback((data: string[]) => {
        const dataRow: string[][] = [];
        const headerRow: string[][] = [];
        let valid = true;
        const indices: number[] = [];
        data.forEach((row, index) => {
            const splitToArrData = row.split(',');
            if (!splitToArrData.includes('')) {
                if (index === 0) {
                    headerRow.push(splitToArrData);
                } else {
                    dataRow.push(splitToArrData);
                }
            } else if (splitToArrData.length !== 1) {
                indices.push(index);
                valid = false;
            }
        });
        if (valid && dataRow.length > 1) {
            toastPopUp(valid, indices);
        } else {
            toastPopUp(valid, indices);
        }
        setIsValid(valid);
        return [headerRow, dataRow];
    }, [setIsValid, toastPopUp]);

    useEffect(() => {
        const values = calulateTableValues(data);
        setTableDataBoth(values);
    }, [data]);

    return (
        <>
            {tableDataBoth.length > 0 ? (
                <StyledTable>
                    <TableHeadContainer row={tableDataBoth[0][0]} />
                    <TableBodyContainer rows={tableDataBoth[1]} />

                </StyledTable>
            ) : null}
        </>
    )
});