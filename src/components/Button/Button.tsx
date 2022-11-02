import { StyledButton } from './styles';

export const Button = ({ text = 'Submit', disabled = false }) => {
    return (
        <StyledButton disabled={disabled} size="small" color="green">{text}</StyledButton>
    )
};