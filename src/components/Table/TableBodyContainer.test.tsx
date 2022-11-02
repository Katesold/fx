import { TableBodyContainer } from './TableBodyContainer';
import { render } from '@testing-library/react';

describe('TableBodyContainer components are being tested', () => {
    const props = {
        rows: [
            ["6535","GBP","122","Invoice 4"],
            ["100005","GBP","255","Invoice 5"],
        ]
    };
    it('should match the snapshot', () => {
        const { container } = render(<TableBodyContainer {...props} />);
        expect(container).toMatchSnapshot();
    });
});