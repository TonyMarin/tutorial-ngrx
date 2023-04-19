import { createReducer, on } from '@ngrx/store';
import * as contadorActions from './contador.actions';

export const initialState = 10;

export const contadorReducer = createReducer(
    initialState,
    on(contadorActions.IncrementarAction, state => state + 1),
    on(contadorActions.DecrementarAction, state => state - 1),
    on(contadorActions.DuplicarAction, state => state * 2),
    on(contadorActions.DemediarAction, state => state / 2),
    on(contadorActions.ResetAction, state => 0),
    on(contadorActions.MultiplicarPorFactorAction, (state, { payload }) => state * payload)
);