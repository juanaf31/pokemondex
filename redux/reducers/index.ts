import { GET_POKEMON, GET_POKEMON_DETAIL } from "../../constants/initType";

const initialState = {
  pokemonList: [],
  pokemonDetail: null,
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemonList: action.payload };
    case GET_POKEMON_DETAIL:
      return { ...state, pokemonDetail: action.payload };
    default:
      return state;
  }
};
