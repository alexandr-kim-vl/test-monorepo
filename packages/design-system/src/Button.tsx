import { forwardRef, HTMLAttributes } from 'react';
import styled from 'styled-components';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
    border: none;
    background-color: #292F36;
    color: #F7FFF7;
    padding: 15px 25px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 9px #BBBBBF;

    &:active {
        box-shadow: 0 5px #85858d;
        transform: translateY(4px);
    }

    &:hover, &:active {
        background-color: #303840;
    }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, ...restProps } = props;

    return (
        <StyledButton {...restProps} ref={ref}>
            Button v1.16
        </StyledButton>
    );
});

export default Button;
