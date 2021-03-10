import React from 'react';
import { Route } from 'react-router-dom';
// import { fetchPokemon } from '../../util/api_util'
//show page for single pokemon, items, moves
class PokemonDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.id)
    }

    render() {
        return (
            <ul>
                <li></li>
            </ul>

        )
    }
}

export default PokemonDetail;