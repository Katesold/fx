import { TableBody, TableData, TableRow } from "./styles";

export const TableBodyContainer = ({ rows }: { rows: string[][] }) => {
    return (
        <TableBody>
            {rows.map(row => {
                console.log(row);
                return (
                    <TableRow>
                        {row.map(dataCell => {
                            return <TableData>{dataCell}</TableData>
                        })}

                    </TableRow>
                )
            })}
        </TableBody>
    )
}