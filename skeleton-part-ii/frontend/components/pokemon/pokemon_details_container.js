import { connect } from "react-redux"
import PokemonDetail from "./pokemon_detail"
import from "./pokemon_detail"



const mapStateToProps = (state, ownProps) => {
    return {
        pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
    }
}


const mapDispatchToProps = dispatch => ({
    requestPokemon: (pokemonId) => dispatch(requestPokemon(pokemonId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)
