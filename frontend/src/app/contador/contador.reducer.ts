import { createReducer, on } from '@ngrx/store';
import * as contadorActions from './contador.actions';
import { initialState } from './contador.state';

export const contadorReducer = createReducer(
    initialState,
    on(contadorActions.IncrementarAction, state => ({ ...state, contador: state.contador + 1 })),
    on(contadorActions.DecrementarAction, state => ({ ...state, contador: state.contador - 1 })),
    on(contadorActions.DuplicarAction, state => ({ ...state, contador: state.contador * 2 })),
    on(contadorActions.DemediarAction, state => ({ ...state, contador: state.contador / 2 })),
    on(contadorActions.ResetAction, state => ({ ...state, contador: 0 })),
    on(contadorActions.MultiplicarPorFactorAction, (state, { payload }) => ({ ...state, contador: state.contador * payload }))
);