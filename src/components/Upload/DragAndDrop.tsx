import { memo, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
import { StyledAcceptedFilesP, StyledDragAndDrop } from './styles';
import { UploadProps } from './types';
import cloud from '../../assets/cloud.png';

export const DragAndDrop: React.FC<UploadProps> = memo(({ uploadPayments }) => {
    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onabort = () => toast.error('file reading was aborted');
            reader.onerror = () => toast.error('file reading has failed');
            reader.onload = () => {
                const result = reader.result as string;
                const headerRow = [];
                const dataRow: string[][] = [];
                if (result) {
                    const dataFromFile = result.split('\r\n');
                    uploadPayments(dataFromFile);
                    headerRow.push(dataFromFile[0].split(','));
                    dataFromFile.forEach((data, index) => {
                        if (index !== 0) {
                            dataRow.push(data.split(','));
                        }
                    });
                };
            }
            reader.readAsText(file);
        });
    }, [uploadPayments]);

    const {
        isDragAccept,
        isDragReject,
        getRootProps,
        getInputProps } = useDropzone({
            onDrop,
            accept: {
                'text/csv': ['.csv', '.xls', '.xlsx'],
            }
        });

    return (
        <>
            <StyledDragAndDrop {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <img src={cloud} alt='cloud' />
                <h4>Drag & Drop</h4>
                {isDragAccept && (<p>Correct format</p>)}
                {isDragReject && (<p>Incorrect file format</p>)}
                <StyledAcceptedFilesP>Supported file types: <span>.csv .xls .xlsx</span></StyledAcceptedFilesP>
            </StyledDragAndDrop>
        </>
    )
});