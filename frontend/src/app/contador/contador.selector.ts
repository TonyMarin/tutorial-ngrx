import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContadorState } from "./contador.state";

export const selectContadorState = createFeatureSelector<ContadorState>('AppContador');

export const selectValorContador = createSelector(
    selectContadorState,
    (state: ContadorState) => state.valorContador
);