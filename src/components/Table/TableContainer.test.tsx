import { TableContainer } from './TableContainer';
import { screen, render, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import userEvent from '@testing-library/user-event';

jest.mock('react-toastify');

describe('TableContainer components are being tested', () => {
    beforeEach(() => jest.clearAllMocks());
    const props = {
        data: ['test', 'test2', '23555', '4w55']
    };
    it('should match the snapshot', () => {
        const { container } = render(<TableContainer {...props}/>);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should trigger toast success', async () => {
        render(<TableContainer {...props}/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        userEvent.click(button);
        await waitFor(() => {
            expect(toast.success).toBeCalledWith(expect.anything(), {"className": "toastSuccessBg", "hideProgressBar": true});
            expect(toast.success).toBeCalledWith('Payments Uploaded', {"className": "toastSuccessBg", "hideProgressBar": true});
            expect(toast.success).toBeCalledTimes(2);
          });
    });
    it('should match the snapshot with incorrect data', () => {
        const wrongData = {
            data: [
                "Beneficiary ID,Payment Currency,Payment Amount,Payment Reference",
                ",GBP,122,Invoice 4",
                "100005,GBP,255,Invoice 5",
                ""
            ]
        }
        const { container } = render(<TableContainer {...wrongData}/>);
        expect(container).toMatchSnapshot();
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});