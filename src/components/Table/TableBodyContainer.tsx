import { TableBody, TableData, TableRow } from "./styles";
import flag from '../../assets/flag.png';

export const TableBodyContainer = ({ rows }: { rows: string[][] }) => {
    return (
        <TableBody>
            {rows.map(row => {
                return (
                    <TableRow>
                        {row.map(dataCell => {
                             if(dataCell === 'GBP') {
                                return <TableData><img src={flag} alt='currency' />{dataCell}</TableData>
                            } else {
                                return <TableData>{dataCell}</TableData>
                            }
                        })}

                    </TableRow>
                )
            })}
        </TableBody>
    )
}