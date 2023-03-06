import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { pokemonOrder, pokemonByOrigin, pokemonByType } from '../../actions/filterActions';

export default function FilterHandler() {
    const types = useSelector (state => state.types);
	const pokemons = useSelector (state => state.pokemons);
	
	const dispatch = useDispatch();

	const handleByOrigin = (e) => {
		dispatch(pokemonByOrigin(e.target.value, pokemons));	
	};
	
	const handleByType = (e) => {
		dispatch(pokemonByType(e.target.value, pokemons));
	};

	const handleOrder = (e) => {
		dispatch(pokemonOrder(e.target.value, pokemons));
	};

    
  return (
        <div>	
			{/* <button name='resetFilter' onClick={handleReset}>Reset Filters</button> */}
			<select name='Origin' onChange={handleByOrigin}>
				<option value='All'>All</option>
				<option value='API' >API Original</option>
				<option value='DB' >User Created</option>
			</select>
			<select name='Type' onChange={handleByType}>
				<option default value='All'>All</option>
				{types &&
					types.map((type, i) => (
						<option key={i} value={type.name}>
							{type.name}
						</option>
					))}
			</select>
			<select name='Order' onChange={handleOrder}>
				<option default value='Unsorted'>Unsorted</option>
				<option value='A-Z'>A-Z</option>
				<option value='Z-A'>Z-A</option>
				<option value='HPA'>+HP/-HP</option>
				<option value='HPD'>-HP/+HP</option>
			</select>
		</div>
  )
}
