import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoPokemon1 from './Pokemon-logo.png';
import LogoPokemon2 from './pokemon.png';
import { getTypes } from "../../actions/actions";
import './Main.css';
import { useDispatch } from 'react-redux';

export default function Main() {

    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getTypes())
    }, [getTypes])
    

  return (
        <div className='landing'>
            <div className='logo-container'>
                <img src={LogoPokemon1} className='landing-logo-img' alt='' />
                <div></div>
                <div></div>
                <img src={LogoPokemon2} className='landing-logo-img' alt='' />
                <div></div>
                <div></div>
            </div>
            <div className='landing_container'>
                <div className='button-container'>
                    <div></div>
                    <button className='btn-grad-main'><Link to='/home' className='link_text'> Iniciar </Link></button>
                </div>
                <p className='created-text'>© 2023 Guillermo Oscar Núñez</p>
            </div>
        </div>
  )
}
