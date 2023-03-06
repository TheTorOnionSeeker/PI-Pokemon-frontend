import axios from "axios";
export const GET_TYPES = 'GET_TYPES';
export const NEW_POKEMON = 'NEW_POKEMON';
export const GET_POKEMON = 'GET_POKEMON';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const POKEMON_BY_NAME_RESET = 'POKEMON_BY_NAME_RESET';
export const POKEMON_DETAIL_RESET = 'POKEMON_DETAIL_RESET';

export const newPokemon = (obj) => {
    console.log("OBJECT",obj)
    return (dispatch) => { 
            return axios.post("http://localhost:3001/pokemons",obj)
            .then((answer)=>         
                dispatch({
                    type: NEW_POKEMON,
                    payload: answer.data
                })
            )
    };
}

export const getPokemon = () => {
    return (dispatch) => { 
        return axios.get("http://localhost:3001/pokemons")
        .then((answer)=>         
            dispatch({
                type: GET_POKEMON,
                payload: answer.data
            })
        )
    };
};

export const getPokemonDetail = (id) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/pokemons/${id}`)
            .then((answer) =>
                dispatch({
                    type: GET_POKEMON_BY_ID,
                    payload: answer.data
                })
            )
    }
};

export const getPokemonByName = (name) => {
    return (dispatch) => {
        return axios.get(`http://localhost:3001/pokemons?name=${name}`)
            .then((answer) =>
                dispatch({
                    type: GET_POKEMON_BY_NAME,
                    payload: answer.data
                })
            )
}
};

export const getPokemonByNameReset = () => {
    return (dispatch) => {
        dispatch({
            type: POKEMON_BY_NAME_RESET,
            payload: []
        })
    }
};

export const getPokemonDetailReset = () => {
    return (dispatch) => {
        dispatch({
            type: POKEMON_DETAIL_RESET,
            payload: []
        })
    }
};

export const getTypes = () => {
    return (dispatch) => {
      return axios.get('http://localhost:3001/types')
        .then((answer) =>
          dispatch({
            type: GET_TYPES,
            payload: answer.data
          }));
    };
};