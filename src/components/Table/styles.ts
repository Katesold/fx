import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { TableProps } from './types';

export const StyledTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px;
`;

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
`;

export const TableHeaderRow = styled.tr`
  width: 100%;
`;

export const TableRow = styled.tr`
  width: 100%;
`;

export const TableData = styled.td`
  width: 25%;
  height: 50px;
  font-size: 13px;
  line-height: 18px;
`;

export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
    .toastSuccessBg {
      background-color: #5FA772;
    }
    .toastErrorBg {
      background-color: #B95656;
    }
  }
`;
