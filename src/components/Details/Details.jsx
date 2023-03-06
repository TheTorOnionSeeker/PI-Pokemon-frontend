import React from 'react';
import { Link } from 'react-router-dom';
import './Details.css';

export default function Details(props) {
  return (
        <div className='details-container'>
            <div className='card-detail'>
                <div className='name-detail'>
                    <h5>{props.name}</h5>
                </div>
                <img src={props.image} alt='' className='img-detail' />
                <p className="id-detail">ID: {props.id}</p>
            </div>
            <div className='stats-detail'>
                <div>
                    <div>HP: {props.hp}</div>
                    <div>Attack: {props.attack}</div>
                    <div>Defense: {props.defense}</div>
                    <div>Speed: {props.speed}</div>
                    <div>Weight: {props.weight}</div>
                    <div>Height: {props.height}</div>
                    <div className='type-container'>
                    {props.Types.length > 1
                    ? <p>{props.Types[0].name}<br></br>
                         {props.Types[1].name}</p>
                    : <p> {props.Types[0].name}</p>}
                    </div>
          
                    <Link to={`/home`}>
                    <button type='submit' className='btn-grad-detail'>
                        Back
                    </button>
                    </Link>
                </div>
            </div>
        </div>
  )
}
