import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { newPokemon } from '../../actions/actions';
import NavBar from '../NavBar/NavBar';
import validation from './validation';
import './New.css';

export default function New() {
    const pokemon_created = useSelector(state => state.pokemon_created);
    const types = useSelector (state => state.types);
    const dispatch = useDispatch();

    //generate random number for image
    const idImagenRandom = Math.floor(Math.random() * (649 - 41)) + 41;
  
    const [input, setInput] = useState({
        name: '',
        hp: null,
        attack: null,
        defense: null,
        speed: null,
        height: null,
        weight: null,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idImagenRandom}.png`,
        type1: 0,
        type2: null,
        type: []
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value    
        });
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
            }));
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
            input.type.push(input.type1);
            if(input.type2) input.type.push(input.type2);
            dispatch(newPokemon(input));
            console.log(input);
            setInput({
                name: '',
                hp: null,
                attack: null,
                defense: null,
                speed: null,
                height: null,
                weight: null,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idImagenRandom}.png`,
                type1: 0,
                type2: null,
                type: []
            });
            alert("Pokemon created!");

            } else alert("Check required fields");
    };


  return (
    <div>
            <NavBar />
            <div className='form-container'>
                <div className='form-container-container'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Name:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.name && 'danger', 'input-item']} name="name" type={'text'} placeholder="Type a name here!" value={input.name} onChange={handleChange} />
                                {errors.name && (
                                    <p className='danger'>{errors.name}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>HP:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.hp && 'danger', 'input-item']} name="hp" placeholder="Type a number between 1-255!" value={input.hp} onChange={handleChange} />
                                {errors.hp && (
                                    <p className='danger'>{errors.hp}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Attack:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.attack && 'danger', 'input-item']} name="attack" type={'number'} placeholder="Type a number between 5-190!" value={input.attack} onChange={handleChange} />
                                {errors.attack && (
                                    <p className='danger'>{errors.attack}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Defense:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.defense && 'danger', 'input-item']} name="defense" type={'number'} placeholder="Type a number between 5-230!" value={input.defense} onChange={handleChange} />
                                {errors.defense && (
                                    <p className='danger'>{errors.defense}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Speed:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.speed && 'danger','input-item']} name="speed" type={'number'} placeholder="Type a number between 5-116!" value={input.speed} onChange={handleChange} />
                                {errors.speed && (
                                    <p className='danger'>{errors.speed}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Weight:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.weight && 'danger','input-item']} name="weight" type={'number'} placeholder="Type a number between 1-9999 kg!" value={input.weight} onChange={handleChange} />
                                {errors.weight && (
                                    <p className='danger'>{errors.weight}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Height:</label>
                            </div>
                            <div className='form-items2'>
                                <input className={[errors.height && 'danger', 'input-item']} name="height" type={'number'} placeholder="Type a number between 1-200 dm!" value={input.height} onChange={handleChange} />
                                {errors.height && (
                                    <p className='danger'>{errors.height}</p>
                                )}
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>First type</label>
                            </div>
                            <div className='form-items2'>
                                <select name="type1" value={input.type1} onChange={handleChange}>
                                    {types.map((types) =>
                                        <option value={types.id} key={types.name}>{types.name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className='form-items'>
                            <div className='form-items1'>
                                <label>Second type (optional)</label>
                            </div>
                            <div className='form-items2'>
                                <select name="type2" value={input.type2} onChange={handleChange}>
                                    <option value="null">None</option>
                                    {types.map((types) =>
                                        <option value={types.id} key={types.name}>{types.name}</option>
                                    )}
                                </select>
                            </div>
                        </div> 
                        <button className='button-form' type='submit'>Create Pokemon</button>
                    </form>
             
                </div>
                <div>
                            <img src={input.image} alt='' className='newPokemonImage' />
                </div>

            </div>
        </div>
  )
}
