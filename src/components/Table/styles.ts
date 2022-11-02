import styled from 'styled-components';
import { TableProps } from './types';

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
`;

export const TableHead = styled.thead`
  width: 100%;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableHeader = styled.th`
  width: 25%;
  height: 28px;
  font-size: 11px;
  line-height: 18px;
  color: #FFF;
`;

export const TableHeaderRow = styled.tr`
  background-color: grey;
  width: 100%;
`;

export const TableData = styled.td`
  width: 25%;
  height: 50px;
  font-size: 13px;
  line-height: 18px;
`;
