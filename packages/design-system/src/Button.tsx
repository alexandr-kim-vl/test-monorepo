import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
    border: none;
    background-color: azure;
    color: blue;
    padding: 4px 10px;
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, ...restProps } = props;

    return (
        <StyledButton {...restProps} ref={ref}>
            {children}
        </StyledButton>
    );
});

export default Button;
