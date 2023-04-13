import { Action } from '@ngrx/store';
import * as contadorActions from './contador.actions';

export function contadorReducer(state: number = 10, action: Action) {
    switch (action.type) {
        case contadorActions.INCREMENTAR:
            return state + 1;
        case contadorActions.DECREMENTAR:
            return state - 1;
        case contadorActions.DUPLICAR:
            return state * 2;
        case contadorActions.DEMEDIAR:
            return state / 2;
        case contadorActions.RESET:
            return 0;
        case contadorActions.MULTIPLICAR_POR_FACTOR:
            return state * (action as contadorActions.MultiplicarPorFactorAction).payload;
        default:
            return state;
    }
}