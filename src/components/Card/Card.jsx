import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
  return (
    <div>
      {
        <div className='card'>
          <div>
            <img src={props.pokemon.image} alt='' className='img' />
            <div className='name'>
              <h5>{props.pokemon.name}</h5>
            </div>

           <div className='type-container'>{props.pokemon.Types.length > 1
                    ? <p>{props.pokemon.Types[0].name} <br></br>
                         {props.pokemon.Types[1].name}</p>
                    : <p>{props.pokemon.Types[0].name}</p>}
            </div>
            <Link to={`/home/id/${props.pokemon.id}`}>
              <button type='submit' className='btn-grad-card'>
                Details
              </button>
            </Link>
          </div>
        </div>
      }
    </div>
  )
}
