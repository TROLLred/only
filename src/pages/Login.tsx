import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import Form from '../components/UI/Form';
import { AuthContext } from '../context';

const Wrapper = styled.div`
    
`;

const Login: FC = () => {
    return (
        <Wrapper>
            <Form/>
        </Wrapper>
    );
};

export default Login;