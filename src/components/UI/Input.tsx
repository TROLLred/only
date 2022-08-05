import React, { FC, InputHTMLAttributes } from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    background: var(--input-bg);
    color: var(--input-color);

    height: 60px;
    border-radius: 8px;
    border: none;
    padding: 20px;
    margin-top: 10px;
    font-family: 'Helvetica Neue';
    font-size: 16px;

    outline: none;
    
    &[aria-invalid='true'] {
        border: 1px solid var(--error-color);
        color: var(--error-color);
    }

    ${props => props.type === 'checkbox' && `
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        padding: 0;
        margin-top: 0;
        margin-right: 14px;
        background-color: var(--bg);
        box-shadow: inset 2px 2px 0 var(--bg),
                    inset 2px -2px 0 var(--bg),
                    inset -2px 2px 0 var(--bg),
                    inset -2px -2px 0 var(--bg);
        outline: none;
        cursor: pointer;
        transition: all .5s ease-in-out;
        border-radius: 4px;
        border: 1px solid #000000;

        &:checked {
            background-color: var(--primary-bg);
        }
    `}
`

export default StyledInput;