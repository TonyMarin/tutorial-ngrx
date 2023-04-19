import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from 'src/app/contador/contador.actions';
import { ContadorState } from 'src/app/contador/contador.state';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    contadorHtmlNieto!: number;

    constructor(private store: Store<{ AppContador: ContadorState }>) {
        this.store.subscribe(state => {
            this.contadorHtmlNieto = state.AppContador.valorContador;
        });
    }

    reset() {
        this.store.dispatch(ResetAction());
    }
}
