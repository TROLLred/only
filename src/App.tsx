import React from 'react';
import './App.css';
import Header from './components/UI/Header';
import AppRouter from './components/AppRouter';
import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Header/>
      <AppRouter/>
    </AppWrapper>
  );
};

export default App;