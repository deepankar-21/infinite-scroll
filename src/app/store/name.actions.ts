import { createAction, props } from '@ngrx/store';

// Action for setting the message
export const setName = createAction(
  '[Name] Set Name',
  props<{ name: string }>()
);
