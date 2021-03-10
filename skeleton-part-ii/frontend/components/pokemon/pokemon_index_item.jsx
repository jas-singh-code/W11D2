import React from 'react';
import { Link } from 'react-router-dom'
import PokemonDetail from './pokemon_detail'


class PokemonIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <Link to={`/pokemon/${this.props.pokemon.id}`} />
            </li>
        )
    }
}

export default PokemonIndexItem;