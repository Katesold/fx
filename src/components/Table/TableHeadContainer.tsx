import { TableHead, TableHeader, TableHeaderRow } from "./styles";

export const TableHeadContainer = ({ row }: { row: string[][] }) => {
    console.log(row, 'row')
    return (
        <TableHead>
            <TableHeaderRow>
                {row?.[0]?.map(cell => {
                    console.log(cell, 'cell');
                    return (
                        <TableHeader>{cell}</TableHeader>
                    )
                })}
            </TableHeaderRow>
        </TableHead>)
};