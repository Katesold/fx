import { TableHead, TableHeader, TableHeaderRow } from "./styles";

export const TableHeadContainer = ({ row }: { row: string[] }) => {
    return (
        <TableHead>
            <TableHeaderRow>
                {row?.map(cell => {
                    return (
                        <TableHeader>{cell}</TableHeader>
                    )
                })}
            </TableHeaderRow>
        </TableHead>)
};