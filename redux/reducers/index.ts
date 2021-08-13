import { GET_POKEMON } from "../../constants/initType";

const initialState = {
	pokemonList:[]
};

export const pokemonReducer = (state = initialState, action:any) => {
	switch (action.type) {
		case GET_POKEMON:
			return { ...state, pokemonList: action.payload };
		default:
			return state;
	}
};