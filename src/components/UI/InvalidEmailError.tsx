import React, { FC } from 'react';
import styled from 'styled-components';

const InvalidEmailField = styled.div`
    display: flex;
    flex-directon: row;
    align-items: center;
    height: 60px;
    border: 1px solid var(--error-color);
    border-radius: 8px;
    background: var(--error-bg);
    padding: 20px;
`;

const ErrorIcon = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #FFC8C8;
    margin-right: 14px;

    font-size: 14px;
    color: #EE6565;
    text-align: center;
    line-height: 20px;
`;

interface InvalidEmailProps {
    children?: React.ReactChild | React.ReactNode;
};

const InvalidEmailError: FC<InvalidEmailProps> = ({children}) => {
    return (
        <InvalidEmailField>
            <ErrorIcon>!</ErrorIcon>{children}
        </InvalidEmailField>
    );
};

export default InvalidEmailError;