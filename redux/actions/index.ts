import axios from "axios";
import { GET_POKEMON } from "constants/initType";

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

export const getPokemonDetail = (name) => async (dispatch:any) => {
  const api = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
        console.log(res.data)
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
