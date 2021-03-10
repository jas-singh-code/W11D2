import React from 'react';
import { Route } from 'react-router-dom';
import { fetchPokemon } from '../../util'
//show page for single pokemon, items, moves
class PokemonDetail extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.requestPokemon(this.props.match.params.id)
    }

    render () {
        return (

        )
    }
}

export default PokemonDetail;