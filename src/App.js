import React from 'react';
import GlobalStyle from './styles/global';
import { Container } from './styles/components';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>

    </>
  );
}

export default App;
