import { DragAndDrop } from './DragAndDrop';
import { screen, render, waitFor, fireEvent, } from '@testing-library/react';
import Dropzone from 'react-dropzone'

function mockData(files: any) {
    return {
        dataTransfer: {
            files,
            items: files.map((file: any) => ({
                kind: 'file',
                type: file.type,
                getAsFile: () => file
            })),
            types: ['Files']
        }
    }
};

const rootProps = {
    onClick: jest.fn(),
    onKeyDown: jest.fn(),
    onFocus: jest.fn(),
    onBlur: jest.fn(),
    onDragEnter: jest.fn(),
    onDragOver: jest.fn(),
    onDragLeave: jest.fn(),
    onDrop: jest.fn(),
};


describe('DragAndDrop components are being tested', () => {
    const file = new File([
        JSON.stringify({ ping: true })
    ], 'ping.json', { type: 'application/json' })
    const data = mockData([file])
    const onDragEnter = jest.fn()
    const props = {
        uploadPayments: jest.fn()
    };
    const ui = (
        <Dropzone onDragEnter={onDragEnter}>
            {({ getRootProps, getInputProps }) => (
                <div {...getRootProps(rootProps)}>
                    <input {...getInputProps()} />
                </div>
            )}
        </Dropzone>
    );
    it('should match snapshot', () => {
        const { container } = render(<DragAndDrop {...props} />);
        expect(container).toMatchSnapshot();
        expect(screen.getByText('Drag & Drop')).toBeInTheDocument();
        expect(screen.getByAltText('cloud')).toBeInTheDocument();
    });
    it('should accept file upload', async () => {
        const { container } = render(ui);
        const inputEl = container.querySelector('input') as Element;
        await waitFor(() => {
            fireEvent.dragEnter(inputEl, data);
        });
        expect(rootProps.onDragEnter).toHaveBeenCalled();

        await waitFor(() => {
            fireEvent.drop(inputEl, data);
        });
        expect(rootProps.onDrop).toHaveBeenCalled();
    })
});