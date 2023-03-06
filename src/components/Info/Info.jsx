import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getPokemonDetail, getPokemonDetailReset } from "../../actions/actions";
import Details from '../Details/Details';
import { Link } from 'react-router-dom';
import searching from './search_poke_empty.gif';
import NavBar from '../NavBar/NavBar';

export default function Info({match}) {
    const pokemon_detail = useSelector (state => state.pokemon_detail)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonDetail (match.params.id))
        return () => { dispatch(getPokemonDetailReset()) }
    }, [getPokemonDetail, match, getPokemonDetailReset])

    
  return (
    <div>
      <NavBar/>
      {pokemon_detail.id ?
       
      <Details 
      id={pokemon_detail.id}
      name={pokemon_detail.name}
      image={pokemon_detail.image}
      hp={pokemon_detail.hp}
      attack={pokemon_detail.attack}
      defense={pokemon_detail.defense}
      speed={pokemon_detail.speed}
      weight={pokemon_detail.weight}
      height={pokemon_detail.height}
      Types={pokemon_detail.Types}
      />   : <div>
            <p>Searching...</p>
            <img className='searching' src={searching}  alt='searching' />
            <Link to={`/home`}>
                    <button type='submit' className='btn-grad-detail'>
                        Back
                    </button>
            </Link>
      </div>}
    </div>
  )
}
