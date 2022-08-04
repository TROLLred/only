import React, { FC } from "react";
import styled from 'styled-components';

const StyledLabel = styled.label`
    color: var(--label-color);
    font-family: 'Helvetica Neue';
    font-size: 16px;
    line-height: 20px;
`;

interface LabelProps {
    children?: React.ReactChild | React.ReactNode;
};

const Label: FC<LabelProps> = ({children, ...props}) => {
    return(
        <StyledLabel {...props}>
            {children}
        </StyledLabel>
    );
};

export default Label;