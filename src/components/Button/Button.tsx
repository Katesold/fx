import { StyledButton } from './styles';
import {StyledButtonProps} from './types';

export const Button = ({ text = 'Submit', disabled = false, ...rest} : { text?: string, disabled?: boolean, onClick: any}) => {
    return (
        <StyledButton disabled={disabled} size="small" color="green" {...rest} >{text}</StyledButton>
    )
};