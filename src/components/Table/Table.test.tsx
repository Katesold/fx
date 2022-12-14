import { Table } from './Table';
import { render, screen } from '@testing-library/react';

describe('Table components are being tested', () => {
    const props = {
        setIsValid: jest.fn(), 
        data: [
            "Beneficiary ID,Payment Currency,Payment Amount,Payment Reference",
            "100001,GBP,100,Invoice 1",
            "100002,GBP,150.5,Invoice 2",
            "100003,GBP,120.75,Invoice 3",
        ], 
        toastPopUp: jest.fn()
    };
    it('should match the snapshot', () => {
        const { container } = render(<Table {...props} />);
        expect(container).toMatchSnapshot();
        expect(screen.getAllByAltText('currency')).toHaveLength(3);
    });
});