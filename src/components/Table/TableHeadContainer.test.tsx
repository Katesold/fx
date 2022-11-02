import { TableHeadContainer } from './TableHeadContainer';
import { render } from '@testing-library/react';

describe('TableHeadContainer components are being tested', () => {
    const props = {
        row: ["Beneficiary ID","Payment Currency","Payment Amount","Payment Reference"]
    };
    it('should match the snapshot', () => {
        const { container } = render(<TableHeadContainer {...props} />);
        expect(container).toMatchSnapshot();
    });
});