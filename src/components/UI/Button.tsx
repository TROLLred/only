import React, { FC } from "react";
import styled from 'styled-components';

const StyledButton = styled("button")<{primary?:boolean}>`
    height: 60px;
    min-width: 200px;
    border: none;
    border-radius: 8px;
    background: ${props => props.primary ? `var(--primary-bg)` : `var(--input-bg)`};
    color: ${props => props.primary ? `#FFFFFF` : `var(--input-color)`};
    font-family: 'Helvetica Neue Bold';
    font-size: 18px;
    cursor: pointer;

    &:disabled {
        background: var(--disabled-primary-bg);
    }
`;

export default StyledButton;