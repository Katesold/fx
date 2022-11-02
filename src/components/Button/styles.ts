import styled from 'styled-components';
import { StyledButtonProps } from './types';

export const StyledButton = styled.button<StyledButtonProps>`
    background: ${props => (props.color === 'green' ? '#098375' : 'blue')};
    border-radius: 4px;
    border: 2px solid #098375;
    color: #FFF;
    margin: 0 20px 0 auto;
    padding: 1em 2em;
    font-size: ${props => (props.size === 'small' ? '12px' : '16px')};
    font-weight: 600;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;
    width: 120px;
    &:hover {
            border-color: #000000;
            transition: border-color 0.2s ease-in-out;
            box-shadow: 0 3px 7px rgb(0 0 0 / 30%);
          }
          &:focus {
            border-color: #000000;
            box-shadow: 0 3px 7px rgb(0 0 0 / 30%);
            transition: border-color 0.2s ease-in-out;
          }
          &:active {
            border-color: #000000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: border-color 0.2s ease-in-out;
          }
`