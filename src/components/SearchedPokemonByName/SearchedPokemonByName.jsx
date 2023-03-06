import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPokemonByName, getPokemonByNameReset } from "../../actions/actions";
import Details from '../Details/Details';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import searching from './search_poke_empty.gif';

export default function SearchedPokemonByName({ match }) {
    const pokemon = useSelector (state => state.pokemon_search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonByName(match.params.name))
        return () => { dispatch(getPokemonByNameReset()) }
    }, [getPokemonByName, match, getPokemonByNameReset])


  return (
    <div>
      <NavBar/>
      {pokemon.name ?
      
      <Details
      id={pokemon.id}
      name={pokemon.name}
      image={pokemon.image}
      hp={pokemon.hp}
      attack={pokemon.attack}
      defense={pokemon.defense}
      speed={pokemon.speed}
      weight={pokemon.weight}
      height={pokemon.height}
      Types={pokemon.Types}
      />
                : <div>
            <p>Pokemon not found!</p>
            <img className='searching' src={searching} alt='searching' />
            <Link to={`/home`}>
                    <button type='submit' className='btn-grad-detail'>
                        Back
                    </button>
            </Link>
          </div>}
    </div>
  )
}
