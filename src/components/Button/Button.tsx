import { StyledButton } from './styles';

export const Button = ({ text = 'Submit'}) => {
    return (
        <StyledButton size="small" color="green">{text}</StyledButton>
    )
};