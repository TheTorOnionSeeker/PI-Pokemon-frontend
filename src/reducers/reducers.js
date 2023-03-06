const initialState = {
    pokemons: [],
    pokemon_detail: [],
    types: [],
    pokemon_search: [],
    pokemon_created: [],
    filteredPokemon: [],
    filtered_by_origin : 'All',
    filtered_by_type: 'All',
    ordered_by: 'Unsorted'
};

const pokemons = (state = initialState, action) => {
    switch (action.type) {
       case 'NEW_POKEMON':
            return {
                ...state,
                pokemon_created: action.payload
            }
        case 'GET_POKEMON':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'GET_POKEMON_BY_ID':
            return {
                ...state,
                pokemon_detail: action.payload
            }
       case 'GET_POKEMON_BY_NAME':
            return {
                ...state,
                pokemon_search: action.payload
            }
       case 'POKEMON_BY_NAME_RESET':
            return {
                ...state,
                pokemon_search: action.payload
            }
        case 'POKEMON_DETAIL_RESET':
            return {
                ...state,
                pokemon_detail: action.payload
            }
        case 'ORDER_BY_OPTIONS':
            return {
                ...state,
                filteredPokemon: action.payload.orderedPokemon,
                ordered_by: action.payload.name
            }
            
        case 'FILTER_BY_ORIGIN':
            return {
                ...state,
                filteredPokemon: action.payload.orderedByOrigin,
                filtered_by_origin: action.payload.name
            }

        case 'FILTER_BY_TYPE':
            console.log("ACTION PAYLOAD", action.payload)
            return {
                ...state,
                filteredPokemon: action.payload.arrayByType,
                filtered_by_type: action.payload.name
            }
            
        default:
            return state
    }
}

export default pokemons;