import { UploadContainer } from './UploadContainer';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('UploadContainer components are being tested', () => {
    const props = {
        uploadPayments: jest.fn()
    };
    it('should match snapshot', () => {
        const { container } = render(<UploadContainer {...props} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Drag & Drop')).toBeInTheDocument();
    });
    it('should accept file upload', async () => {
        render(<UploadContainer {...props} />);
        const file = new File(["(⌐□_□)"], "test.csv", { type: "text/csv" });
        const inputEl = document.querySelector('input') as HTMLInputElement;
        await waitFor(() => {
          userEvent.upload(inputEl, file);
        });
        expect(inputEl.files).toHaveLength(1);
    })
});