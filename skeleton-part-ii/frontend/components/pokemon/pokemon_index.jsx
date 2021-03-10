import React from 'react';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPokemon()
  }

  render() {
    return (
      <section className="pokedex">
        <ul>
          {this.props.pokemon.map((poke, index) => (
            <li key={index} className="pokemon-index-item">
              <span>{poke.id}</span>
              <img src={poke.imageUrl} />
              <span>{poke.name}</span>
            </li>
          ))}
        </ul>
      </section>
    )
  }
}



export default PokemonIndex;