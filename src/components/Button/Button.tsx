import { StyledButton } from './styles';
import { ButtonProps } from './types';

export const Button: React.FC<ButtonProps> = ({ disabled = false, children, ...rest}) => {
    return (
        <StyledButton disabled={disabled} size='small' color='green' {...rest}>{children}</StyledButton>
    )
};