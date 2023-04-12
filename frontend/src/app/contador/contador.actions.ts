import { Action } from "@ngrx/store";

export const INCREMENTAR = '[Contador] Incrementar';
export const DECREMENTAR = '[Contador] Decrementar';
export const DUPLICAR = '[Contador] Duplicar';
export const DEMEDIAR = '[Contador] Demediar';
export const RESET = '[Contador] Reset';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR;
}

export class DuplicarAction implements Action {
    readonly type = DUPLICAR;
}

export class DemediarAction implements Action {
    readonly type = DEMEDIAR;
}

export class ResetAction implements Action {
    readonly type = RESET
}