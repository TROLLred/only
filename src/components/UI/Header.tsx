import React, { FC } from "react";
import styled from 'styled-components';

const StyledHeader = styled.div`
    position: fixed;
    top: 0;
    
    width: 100%;
    padding-top: 40px;
    background: var(--bg);

    font-family: 'Helvetica Neue Bold';
    font-size: 64px;
    text-align: center;
`;

const Header: FC = () => {
    return (
        <StyledHeader>
            ONLY.
        </StyledHeader>
    );
};

export default Header;