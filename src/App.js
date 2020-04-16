import React, { Fragment, Suspense } from 'react';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import BottomBar from './components/BottomBar/BottomBar';
import ListButtons from './components/BottomBar/ListButtons';
import BodyList from './components/BodyList/BodyList';
import { Switch, Route } from 'react-router-dom';

function App() {

  let routes = (
    <Switch>
      <Route path="/" exact>
        <BodyList />
      </Route>
    </Switch>
  )

  return (
    <Fragment>
      <TopBar title="Inicio"/>
      <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      <BottomBar buttons = {ListButtons()}/>
    </Fragment>  
  );
}

export default App;
