import { createReducer, on } from '@ngrx/store';
import * as contadorActions from './contador.actions';
import { initialState } from './contador.state';

export const contadorReducer = createReducer(
    initialState,
    on(contadorActions.IncrementarAction, state => ({ ...state, estaCargando: true })),
    on(contadorActions.IncrementarActionSuccess, (state, { data }) => ({ ...state, valorContador: data.operando, estaCargando: false })),
    on(contadorActions.IncrementarActionError, (state, { data }) => ({ ...state, valorContador: 0, estaCargando: false, tieneError: data })),
    on(contadorActions.DecrementarAction, state => ({ ...state, valorContador: state.valorContador - 1 })),
    on(contadorActions.DuplicarAction, state => ({ ...state, valorContador: state.valorContador * 2 })),
    on(contadorActions.DemediarAction, state => ({ ...state, valorContador: state.valorContador / 2 })),
    on(contadorActions.ResetAction, state => ({ ...state, valorContador: 0 })),
    on(contadorActions.MultiplicarPorFactorAction, (state, { payload }) => ({ ...state, valorContador: state.valorContador * payload }))
);