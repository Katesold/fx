import { Button } from './Button';
import { screen, render, fireEvent } from '@testing-library/react';

describe('Button components are being tested', () => {
    const props = {
        onClick: jest.fn(),
        disabled: false,
        children: 'Submit'
    };
    it('should match snapshot', () => {
        const { container } = render(<Button {...props} />);
        expect(container).toMatchSnapshot();
    });
    it('should display the button correctly with props', () => {
        render(<Button {...props} />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });
    it('should display the disabled button correctly with props', () => {
        const newProps = {
            ...props,
            disabled: true,
        };
        const { container } = render(<Button {...newProps} />);
        expect(container).toMatchSnapshot();
    });

    it("should call the onclick function when clicked", () => {
        render(<Button {...props} />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    
        fireEvent.click(button);
        expect(props.onClick).toHaveBeenCalledTimes(1);
      });
});