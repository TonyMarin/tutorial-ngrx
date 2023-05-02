import { createAction, props } from '@ngrx/store';
import { Operando } from './contador.model';

export const IncrementarAction = createAction('[Contador] Incrementar');
export const IncrementarActionSuccess = createAction('[Contador] Incrementar Success', props<{ data: Operando }>());
export const IncrementarActionError = createAction('[Contador] Incrementar Error', props<{ data: string }>());

export const DecrementarAction = createAction('[Contador] Decrementar');
export const DuplicarAction = createAction('[Contador] Duplicar');
export const DemediarAction = createAction('[Contador] Demediar');
export const ResetAction = createAction('[Contador] Reset');
export const MultiplicarPorFactorAction = createAction('[Contador] Multiplicar por factor', props<{ payload: number }>());