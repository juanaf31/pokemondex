import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonEvolution } from "redux/actions";
import { RootState } from "redux/store";

function Evolution() {
  const dispatch = useDispatch();
  const pokemon = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonDetail
  );
  const pokemonEvolution = useSelector(
    (state: RootState) => state.pokemonReducer.pokemonEvolution
  );

  useEffect(() => {
    dispatch(getPokemonEvolution(pokemon?.id));
  }, [pokemon?.id]);

  console.log(pokemonEvolution);
  return <div>Evolution</div>;
}

export default Evolution;
