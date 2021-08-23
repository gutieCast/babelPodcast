import React from 'react'
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import { Header } from 'components/Header';
import Main from 'components/Main';
import './App.scss';

smoothScrollPolyfill.polyfill();

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
