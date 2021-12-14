import { useEffect, useState } from 'react';
import PokemonList from '../../components/pokemonList/PokemonList';
import FilterControls from '../../components/controls/filter/FilterControls';
import {
  fetchPokemonAPI,
  fetchPokemonApiTypes,
  fetchPokemonFilteredByType,
} from '../../services/FetchPokemonAPI';

function Compendium() {
  const [loading, setLoading] = useState(true);
  const [pokemonState, setPokemonState] = useState([]);
  const [typeState, setTypeState] = useState([]);
  const [filteredTypeState, setFilteredTypeState] = useState('all');

  useEffect(() => {
    async function getPokemon() {
      const fetchedPokemon = await fetchPokemonAPI();
      setPokemonState(fetchedPokemon);
      setLoading(false);
    }

    getPokemon();
  }, []);

  useEffect(() => {
    async function getTypes() {
      const fetchedTypes = await fetchPokemonApiTypes();
      setTypeState(fetchedTypes);
    }

    getTypes();
  }, []);

  useEffect(() => {
    if (!filteredTypeState) return;

    async function getFilteredPokemon() {
      setLoading(true);
      if (filteredTypeState === 'all') {
        const fetchedPokemon = await fetchPokemonAPI();
        setPokemonState(fetchedPokemon);
      } else {
        const fetchedFilteredPokemon = await fetchPokemonFilteredByType(
          filteredTypeState
        );
        setPokemonState(fetchedFilteredPokemon);
      }
      setLoading(false);
    }

    getFilteredPokemon();
  }, [filteredTypeState]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(pokemonState);
  return (
    <>
      <FilterControls
        types={typeState}
        filteredType={filteredTypeState}
        handleChange={setFilteredTypeState}
      />
      <PokemonList pokemon={pokemonState} />
    </>
  );
}

export default Compendium;
