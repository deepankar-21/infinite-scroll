import { createReducer, on } from '@ngrx/store';
import { setName } from './name.actions';

// Initial state
export const initialState: string = '';

// Create reducer to handle message setting
export const nameReducer = createReducer(
  initialState,
  on(setName, (state, { name }) => name)
);
