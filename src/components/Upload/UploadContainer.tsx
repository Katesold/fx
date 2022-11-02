import { memo } from 'react';
import { DragAndDrop } from './DragAndDrop';
import { StyledUploadContainer } from './styles';
import { UploadProps } from './types';

export const UploadContainer: React.FC<UploadProps> = memo(({uploadPayments}) => {
    return (
        <>
            <StyledUploadContainer>
                <h1>Upload Payments</h1>
                <DragAndDrop uploadPayments={uploadPayments} />
            </StyledUploadContainer>
        </>
    )
});