import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// class FileReaderMock {
//   DONE = FileReader.DONE;
//   EMPTY = FileReader.EMPTY;
//   LOADING = FileReader.LOADING;
//   readyState = 0;
//   error: FileReader['error'] = null;
//   result: FileReader['result'] = null;
//   abort = jest.fn();
//   addEventListener = jest.fn();
//   dispatchEvent = jest.fn();
//   onabort = jest.fn();
//   onerror = jest.fn();
//   onload = jest.fn();
//   onloadend = jest.fn();
//   onloadprogress = jest.fn();
//   onloadstart = jest.fn();
//   onprogress = jest.fn();
//   readAsArrayBuffer = jest.fn();
//   readAsBinaryString = jest.fn();
//   readAsDataURL = jest.fn();
//   readAsText = jest.fn();
//   removeEventListener = jest.fn();
// }

describe('App components are being tested', () => {
  const file = new File(['1, 34, 342, 25'], 'file.csv', {type: 'text/csv'});
  // const fileReader = new FileReaderMock();
  // jest.spyOn(window, 'FileReader').mockImplementation(() => fileReader);

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
    // const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    // const file = new File(["(⌐□_□)"], "test.csv", { type: "text/csv" });

    // fileReader.result = 'file content, two';
    // fileReader.addEventListener.mockImplementation((_, fn) => fn());

    // const content = await fileReader.readAsText(file);

    // expect(content).toBe('file content');

    const inputEl = document.querySelector('input') as HTMLInputElement;
    await waitFor(() => {
      userEvent.upload(inputEl, file);
    });
    expect(inputEl.files).toHaveLength(1);
  });
});

