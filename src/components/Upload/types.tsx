import { Dispatch, SetStateAction } from 'react';

export interface UploadProps {
    uploadPayments: Dispatch<SetStateAction<string[]>>, 
}