import React, { FC } from "react";
import styled from 'styled-components';

const StyledButton = styled("button")<{background?: string, color?: string}>`
    height: 60px;
    min-width: 200px;
    border: none;
    border-radius: 8px;
    background: var(--primary-bg);
    color: #FFFFFF;
    font-family: 'Helvetica Neue Bold';
    font-size: 18px;
    cursor: pointer;
`;

interface ButtonProps {
    type?: string;
    children?: React.ReactChild | React.ReactNode;
};

const Button: FC<ButtonProps> = ({children, type, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default Button;