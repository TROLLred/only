import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import Button from '../components/UI/Button';
import { AuthContext } from '../context';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Greetings = styled.p`
    font-family: 'Helvetica Neue';
    font-size: 40px;
    text-align: center;
    margin-bottom: 50px;
`

const UserName = styled.span`
    font-family: 'Helvetica Neue Bold';
    font-size: 40px;
`

const Profile: FC = () => {
    return (
        <Wrapper>
            <Greetings>Здравствуйте, <UserName>steve.jobs@example.com</UserName></Greetings>
            <Button>Выйти</Button>
        </Wrapper>
    );
};

export default Profile;