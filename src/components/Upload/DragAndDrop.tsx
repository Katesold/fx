import { useCallback, useState, useContext } from 'react'
import { useDropzone } from 'react-dropzone'
import { AppContext } from '../../App';

export const DragAndDrop = () => {
    const [paymentsData, setPaymentsData] = useState([] as string[][]); 
    const [paymentsHeader, setPaymentsHeader] = useState([] as string[][]);
    const [paymentsData2, setPaymentsData2] = useState([] as string[]);
    const appContext = useContext(AppContext);
    const ctx = useContext(AppContext);

    const onDrop = useCallback((acceptedFiles: any) => {
        acceptedFiles.forEach((file: any) => {
            const reader = new FileReader();

            reader.onabort = () => console.log('file reading was aborted'); // toast!
            reader.onerror = () => console.log('file reading has failed');
            reader.onload = () => {
                const result = reader.result as string;
                const headerRow = [];
                const dataRow: string[][] = [];
                if (result) {
                    const dataFromFile = result.split('\r\n');
                    setPaymentsData2(dataFromFile);
                    ctx?.uploadPayments(dataFromFile);
                    headerRow.push(dataFromFile[0].split(','));
                    dataFromFile.forEach((data, index) => {
                        if(index !== 0){
                            dataRow.push(data.split(','));
                        }
                    });
                    setPaymentsHeader(headerRow);
                    setPaymentsData(dataRow);
                };
            }
            reader.readAsText(file);
        });

    }, []);
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
    )
};