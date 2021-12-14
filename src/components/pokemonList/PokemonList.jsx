// import PropTypes from 'prop-types';
import Pokemon from '../pokemonDetails/Pokemon';

const PokemonList = ({ pokemon }) => (
  <ul aria-label="pokemon">
    {pokemon.map((poke) => (
      <li key={poke.name}>
        <Pokemon
          name={poke.name}
          image={poke.image}
          typeOne={poke.typeOne}
          typeTwo={poke.typeTwo}
          attack={poke.attack}
          defense={poke.defense}
          pokedex={poke.pokedex}
        />
      </li>
    ))}
  </ul>
);

export default PokemonList;
