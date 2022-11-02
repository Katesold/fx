import { StyledButton } from './styles';

export const Button = ({ text = 'Submit', disabled = false, ...rest} : { text?: string, disabled?: boolean, onClick: any}) => {
    return (
        <StyledButton disabled={disabled} size="small" color="green" {...rest} >{text}</StyledButton>
    )
};