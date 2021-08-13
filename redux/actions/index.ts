import axios from "axios";
import { GET_POKEMON, GET_POKEMON_DETAIL } from "constants/initType";

export const getPokemonList = (limit, offset) => async (dispatch) => {
  const api = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then((res) => {
      dispatch({ type: GET_POKEMON, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getPokemonDetail = (name) => async (dispatch: any) => {
  const api = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      dispatch({ type: GET_POKEMON_DETAIL, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
