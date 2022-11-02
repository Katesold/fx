import { TableBody, TableData, TableRow } from "./styles";
import flag from '../../assets/flag.png';
import { TableBodyContainerProps } from "./types";

export const TableBodyContainer: React.FC<TableBodyContainerProps> = ({ rows }) => {
    return (
        <TableBody>
            {rows?.map((row, index) => {
                return (
                    <TableRow key={`tableRow-${index}`}>
                        {row.map(dataCell => {
                             if(dataCell === 'GBP') {
                                return <TableData key={`tableCell-${dataCell}`}><img src={flag} alt='currency' />{dataCell}</TableData>
                            } else {
                                return <TableData key={`tableCell-${dataCell}`}>{dataCell}</TableData>
                            }
                        })}
                    </TableRow>
                )
            })}
        </TableBody>
    )
};