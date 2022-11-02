import { memo } from 'react';
import { DragAndDrop } from './DragAndDrop';
import { StyledUploadContainer } from './styles';

export const UploadContainer = memo(({uploadPayments} : { uploadPayments: Function }) => {
    return (
        <>
            <StyledUploadContainer>
                <h1>Upload Payments</h1>
                <DragAndDrop uploadPayments={uploadPayments} />
            </StyledUploadContainer>
        </>
    )
});