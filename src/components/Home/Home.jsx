import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch } from "react-redux";
import { getPokemon } from "../../actions/actions";

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [allPokemons, setAllPokemons] = useState([]);
    
    const pokemonPerPage = 12;

    const pokemons = useSelector((state) => state.pokemons);
    const filtered = useSelector((state) => state.filteredPokemon);
    const filteredByOrigin = useSelector((state) => state.filtered_by_origin);
    const filteredByType = useSelector((state) => state.filtered_by_type);
    const orderedBy = useSelector((state) => state.ordered_by);
    
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
   
    const currentPokemon = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (filteredByOrigin === 'All' && filteredByType === 'All' && orderedBy === "Unsorted") {
          setCurrentPage(1)
          setAllPokemons(pokemons.slice());
      
        } else {

        setAllPokemons(filtered.slice()); 

   
         }
}, [filteredByOrigin, filteredByType, orderedBy, pokemons, filtered]);


  return (
        <div>
            <NavBar/>
            <SearchBar/>
            <div>
            <Cards
                pokemons={currentPokemon}
            />
            </div>
            <Pagination
                pokemonPerPage={pokemonPerPage}
                totalPokemon={allPokemons?.length}
                paginate={paginate}
            />
        </div>
  )
}
