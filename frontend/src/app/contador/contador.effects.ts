import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { ContadorService } from './contador.service';
import {
  IncrementarAction,
  IncrementarActionSuccess,
  IncrementarActionError,
} from './contador.actions';
import { Store, select } from '@ngrx/store';
import { ContadorState } from './contador.state';
import { selectValorContador } from './contador.selector';

@Injectable()
export class ContadorEffects {
  constructor(
    private store: Store<ContadorState>,
    private actions$: Actions,
    private contadorService: ContadorService
  ) {}

  incrementar$ = createEffect(() => { // Se crea el efecto "incrementar$" que es una función que devuelve un observable de acciones.
    return this.actions$.pipe( // Se escucha el flujo de acciones.
      ofType(IncrementarAction), // Se filtran las acciones de tipo "IncrementarAction".
      mergeMap(() => // Se pasa a un observable interno mediante mergeMap para que las emisiones no se mezclen.
        this.store.pipe( // Se accede al Store, que es el almacén de datos de la aplicación.
          select(selectValorContador), // Se selecciona el valor del contador del Store.
          take(1), // Se toma solo el primer valor emitido por selectValorContador. Así evitamos que se vuelva a lanzar el efecto al incrementar el contador.
          switchMap((valorContador) => // Se usa switchMap para cambiar a otro observable que es el resultado de llamar a "this.contadorService.incrementar({ operando: valorContador })".
            this.contadorService.incrementar({ operando: valorContador }).pipe( // Se llama al servicio "incrementar" pasándole el valor del contador.
              map((data) => IncrementarActionSuccess({ data })), // Si el servicio retorna un resultado, se emite una acción "IncrementarActionSuccess".
              catchError((error) => of(IncrementarActionError({ data: error }))) // Si el servicio retorna un error, se emite una acción "IncrementarActionError".
            )
          )
        )
      )
    );
  });
}
