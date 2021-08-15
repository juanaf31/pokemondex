import {
  GET_POKEMON,
  GET_POKEMON_DETAIL,
  GET_POKEMON_EVOLUTION,
  GET_POKEMON_SPECIES,
} from "../../constants/initType";
import { PokemonListAttributes } from "models/pokemonList";
import { PokemonDetailAttributes } from "models/pokemonDetail";
interface StateAttributes {
  pokemonList: PokemonListAttributes;
  pokemonDetail: PokemonDetailAttributes;
  pokemonEvolution: any;
  pokemonSpecies: any;
}

const initialState: StateAttributes = {
  pokemonList: null,
  pokemonDetail: null,
  pokemonEvolution: null,
  pokemonSpecies: null,
};

export const pokemonReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POKEMON:
      return { ...state, pokemonList: action.payload };
    case GET_POKEMON_DETAIL:
      return { ...state, pokemonDetail: action.payload };
    case GET_POKEMON_EVOLUTION:
      return { ...state, pokemonEvolution: action.payload };
    case GET_POKEMON_SPECIES:
      return { ...state, pokemonSpecies: action.payload };
    default:
      return state;
  }
};
