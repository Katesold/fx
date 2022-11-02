import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
describe('App components are being tested', () => {
  const file = new File(['1, 34, 342, 25'], 'file.csv', {type: 'text/csv'});

  it('should match snapshot', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it('should display UploadContainer', () => {
    render(<App />);
    const title = screen.getByText('Upload Payments');
    expect(title).toBeInTheDocument();
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('should render Toast', () => {
    render(<App />);
    const toast = document.querySelector('.Toastify');
    expect(toast).toBeInTheDocument();
  });

  it('should accept file', async () => {
    render(<App />);

    const inputEl = document.querySelector('input') as HTMLInputElement;
    await waitFor(() => {
      userEvent.upload(inputEl, file);
    });
    expect(inputEl.files).toHaveLength(1);
  });
});

