import { combineReducers } from 'redux';
import { pokemonReducer } from '../reducers';

export const rootReducer = combineReducers({
	pokemonReducer
});

export type RootState = ReturnType<typeof rootReducer>