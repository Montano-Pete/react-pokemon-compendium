import PropTypes from 'prop-types';

const Pokemon = ({
  name,
  image,
  typeOne,
  typeTwo,
  attack,
  defense,
  pokedex,
}) => (
  <figure>
    <h2>{name}</h2>
    <img alt="" src={image} height="250" />
    <p>
      Type: {typeOne} / {typeTwo}
    </p>
    <p>Attack: {attack}</p>
    <p>Defense: {defense}</p>
    <a href={pokedex}>Detailed Pokedex Page</a>
  </figure>
);

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  typeOne: PropTypes.string.isRequired,
  typeTwo: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
};

export default Pokemon;
