export interface ContadorState {
  valorContador: number;
  estaCargando: boolean;
  tieneError: string | null;
}

export const initialState: ContadorState = {
  valorContador: 10,
  estaCargando: false,
  tieneError: null
};