import { createAction, props } from '@ngrx/store';

export const IncrementarAction = createAction('[Contador] Incrementar');
export const DecrementarAction = createAction('[Contador] Decrementar');
export const DuplicarAction = createAction('[Contador] Duplicar');
export const DemediarAction = createAction('[Contador] Demediar');
export const ResetAction = createAction('[Contador] Reset');
export const MultiplicarPorFactorAction = createAction('[Contador] Multiplicar por factor', props<{ payload: number }>());