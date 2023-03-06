import React from 'react';
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import pokemons from '../../reducers/reducers';
import { pokemonByOrigin, pokemonByType, pokemonOrder } from '../../actions/filterActions';
import LogoPokemon from './Pokemon-logo.png';
import PokeBola from './pngegg.png';
import NewIcon from './new-icon.png';
import './NavBar.css';

export default function NavBar() {
    const dispatch = useDispatch();

    const initHome = () => {   
    dispatch(pokemonByOrigin('All', pokemons));	
    dispatch(pokemonByType('All', pokemons));
    dispatch(pokemonOrder('Unsorted', pokemons));
    }
  return (
    <div className='nav-container'>
      <div className='logo-start'>
      <Link to='/home'>
           <img src={LogoPokemon} className='pokemon-logo-start'/>
        </Link>
      </div>
      <div onClick={initHome} className='logo-init'>
        <Link to='/home'>
            <img src={PokeBola} className='poke-bola'/>
        </Link>
      </div>
      <div className='create-link'>
        <Link to='/newpokemon'>
        <button type='submit' className='btn-grad-new'>
          NEW
        </button>   
        </Link>
      </div>
    </div>
  )
}

