import React, { Fragment } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar/BottomBar';
import ListButtons from './components/BottomBar/ListButtons';

function App() {
  return (
    <Fragment>
      <TopBar title="Inicio"/>
      <BottomBar buttons = {ListButtons()}/>
    </Fragment>  
  );
}

export default App;
