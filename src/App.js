import AllBeerItems from './pages/AllBeerItems/AllBeerItems';
import SelectedBeer from './pages/SelectedBeer/SelectedBeer';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setBeerState } from './store/slices/slice';
import { useDispatch } from 'react-redux';
import Signboard from "./images/Signboard.png"
import './App.css';

const App = () => {
  console.log('App');
  const dispatch = useDispatch();
  const getAllBeerItems = () => {
    axios.get("https://api.punkapi.com/v2/beers").then(res => {
      dispatch(setBeerState(res.data))
      console.log(res.data);
    })
  }
  useEffect(() => {
    getAllBeerItems();
  }, [])
  return (
    <div className="App">
      <header className="header">
        <img className="sighboard" src={Signboard} alt={"sighboard"} />
      </header>
      <Switch>
        <Route path='/all' component={AllBeerItems} />
        <Route path='/&beer=:beer' component={SelectedBeer} />
        <Redirect to='/all' />
      </Switch>
    </div>
  );
}

export default App;
