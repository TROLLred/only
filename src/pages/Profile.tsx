import React, { FC } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StyledButton from '../components/UI/Button';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

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
    //const router = useHistory();
    const {user} = useTypedSelector(state => state.auth);
    const {logout} = useActions();
    return (
        <Wrapper>
            <Greetings>Здравствуйте, <UserName>{user.email}</UserName></Greetings>
            <StyledButton onClick={logout}>Выйти</StyledButton>
        </Wrapper>
    );
};

export default Profile;