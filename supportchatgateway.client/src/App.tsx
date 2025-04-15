import React from 'react';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;