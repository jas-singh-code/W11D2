import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

const itemsReducer = (state = {}, action) => {
    Object.freeze(state)
    debugger
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_POKEMON:
            debugger
            return nextState = action.pokemon.items;
        default:
            return state;
    }
}
export default itemsReducer;