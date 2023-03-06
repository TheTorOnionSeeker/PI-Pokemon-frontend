import React from 'react';
import Card from '../Card/Card';
import './Cards.css';

export default function Cards({ pokemons }) {
  return (
    <div className='cards'>
      {
        pokemons.map((pokemon, i) => (
          <Card key={i} pokemon={pokemon} index={i}/>
        )
        )}
    </div>
  )
}
