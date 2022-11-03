import { useState, memo } from 'react';
import { Button } from '../Button/Button';
import { Table } from './Table';
import { StyledContainer, StyledTableContainer } from './styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ResponseData, TableContainerProps } from './types';

const Msg = memo(() => {
    return (
        <div className={'toastSuccessBg'}>
            <h3>Payment Successful</h3>
            <p> Payments are processing. You will be notified when they are ready</p>
        </div>
    )
});

export const TableContainer: React.FC<TableContainerProps> = memo(({ data }) => {
    const [isValid, setIsValid] = useState(false);

    const sendData = async (formattedData: ResponseData[]) => {
        const response = await fetch('https://run.mocky.io/v3/cbca762d-3f84-4ae4-bb26-79fa774a6c72', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(formattedData),
        });
        const data: { message: string } = await response.json();
        if (response.status === 200) {
            toast.success(data.message, { hideProgressBar: true, className: 'toastSuccessBg' });
        } else {
            toast.error(`Failed file upload with the following message: ${data.message}`, {
                hideProgressBar: true,
                className: 'toastErrorsBg'
            });
        }
    }

    const formatData = (data: string[]) => {
        const formattedData: ResponseData[] = [];
        data.forEach((row, index) => {
            if (index !== 0 && row.length) {
                const splitData = row.split(',');
                const newData = {
                    name: 'Test',
                    id: splitData[0],
                    amount: parseInt(splitData[2]),
                    currency: splitData[1],
                    reference: splitData[3],
                };
                formattedData.push(newData);
            }
        });
        return formattedData;
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const formattedData = formatData(data);
        sendData(formattedData);
    }

    const toastPopUp = (valid: boolean, indices: number[]) => {
        if (!valid) {
            toast.error(`The file contains incorrect data on the ${indices.map((index) => index + 1)}th row`, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                className: 'toastErrorsBg',
            });
        } else {
            toast.success(<Msg />, { hideProgressBar: true, className: 'toastSuccessBg' });
        }
    };

    return (
        <StyledTableContainer>
            <Table setIsValid={setIsValid} data={data} toastPopUp={toastPopUp} />
            {isValid ? <Button text='Submit' onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleClick(event)} /> : null}
            <StyledContainer theme='colored' />
        </StyledTableContainer>
    )
});