import { TableHead, TableHeader, TableHeaderRow } from './styles';
import { TableHeadContainerProps } from './types';

export const TableHeadContainer: React.FC<TableHeadContainerProps> = ({ row }) => {
    return (
        <TableHead>
            <TableHeaderRow>
                {row?.map(cell => {
                    return (
                        <TableHeader key={`headerCell-${cell}`}>{cell}</TableHeader>
                    )
                })}
            </TableHeaderRow>
        </TableHead>)
};