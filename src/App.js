import React from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main/Main';
import New from './components/New/New';
/* import GetTypes from './components/Types/Types' */
import SearchedPokemonByName from './components/SearchedPokemonByName/SearchedPokemonByName';
import Home from './components/Home/Home';
import Info from './components/Info/Info';
import './App.css';

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={Main} />
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/name/:name' component={SearchedPokemonByName}/>
      <Route exact path='/home/id/:id' component={Info}/>
      <Route exact path='/newpokemon' component={New}/>
    </div>
  );
}

export default App;
