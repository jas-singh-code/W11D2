import { RECEIVE_POKEMON } from "../actions/pokemon_actions"

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POKEMON:
            return nextState = action.pokemon.moves
            break;
        default:
            break;
    }
}
export default movesReducer;