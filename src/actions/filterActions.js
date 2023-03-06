export const ORDER_BY_OPTIONS = 'ORDER_BY_OPTIONS';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const RESET = 'RESET';

export const pokemonOrder = (by) => (dispatch, getState) => {

const filtered = getState().filteredPokemon
const pokemon = getState().pokemons
const filterByOrigin = getState().filtered_by_origin
const filterByType = getState().filtered_by_type

console.log('Filtered',filtered);
console.log('Pokemon',pokemon);
console.log('filterByOrigin',filterByOrigin);
console.log('filterByType',filterByType);

	switch (by) {
		case 'A-Z':
			if (filterByOrigin === 'All'&& filterByType === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			else {
				const orderedPokemon = filtered.sort(
					(a, b) => {
						if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		case 'Z-A':
			if (filterByOrigin === 'All'&& filterByType === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => {
						if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => {
						if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
						if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
						return 0
					}
				);
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			
			break;

		case 'HPA':
			if (filterByOrigin === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => b.hp - a.hp
				)
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => b.hp - a.hp
				)
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;

		case 'HPD':
			if (filterByOrigin === 'All') {
				const orderedPokemon = pokemon.sort(
					(a, b) => a.hp - b.hp
				)
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			} else {
				const orderedPokemon = filtered.sort(
					(a, b) => a.hp - b.hp
				)
				dispatch({
					type: ORDER_BY_OPTIONS,
					payload: {
						orderedPokemon,
						name: by
					}
				})
			}
			break;
		case 'Unsorted':
			const orderedPokemon = pokemon
			dispatch({
				type: ORDER_BY_OPTIONS,
				payload: {
					orderedPokemon,
					name: by
				}
			})
			break
		default:
			return pokemon
	}
};


export const pokemonByOrigin = (by) => (dispatch, getState) => {

	const pokemon = getState().pokemons

	let orderedByOrigin = [];
	switch (by) {
		case 'API':
			orderedByOrigin = pokemon.filter((el) => typeof el.id === 'number'); 
			dispatch({
				type: FILTER_BY_ORIGIN,
				payload: {
					orderedByOrigin,
					name: by
				}
			})
			break;

		case 'DB':
			orderedByOrigin = pokemon.filter((el) => typeof el.id !== 'number'); 
			dispatch({
				type: FILTER_BY_ORIGIN,
				payload: {
					orderedByOrigin,
					name: by
				}
			})
			break;

		case 'All':
			orderedByOrigin = pokemon;		
			dispatch({
				type: FILTER_BY_ORIGIN,
				payload: {
					orderedByOrigin,
					name: by
				}
			})
			break;

		default:
			return pokemon;
	}
};


export const pokemonByType = (pokeType) => (dispatch, getState) => {

	const pokemon = getState().pokemons.slice()

	if (pokeType === 'All') {

		let arrayByType = pokemon;

		dispatch({
			type: FILTER_BY_TYPE,
			payload: {
				arrayByType,
				name: pokeType
			}
		});

	} else {

		let arrayByType = pokemon.filter(elem =>
			(elem.Types[0].name === pokeType) || (elem.Types[1]?.name === pokeType)
		);
		dispatch({
			type: FILTER_BY_TYPE,
			payload: {
				arrayByType,
				name: pokeType
			}
		});
	}
};