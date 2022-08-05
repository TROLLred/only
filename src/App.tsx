import React, { useState, useEffect } from 'react';
import Header from './components/UI/Header';
import AppRouter from './components/AppRouter';
import styled from 'styled-components';
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

function App() {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setUser({email: localStorage.getItem('email' || '')} as IUser)
      setIsAuth(true);
    }
  }, []); //При обновлении страницы проверяем, был ли пользователь залогинен
  return (
    <AppWrapper>
      <Header/>
      <AppRouter/>
    </AppWrapper>
  );
};

export default App;