import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
    border: none;
    background-color: gray;
    color: black;
    padding: 4px 10px;
    border: 2px solid red;
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, ...restProps } = props;

    return (
        <StyledButton {...restProps} ref={ref}>
            Button v1.1.2
        </StyledButton>
    );
});

export default Button;
