import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from 'src/app/contador/contador.actions';
import { ContadorState } from 'src/app/contador/contador.state';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    contadorNieto!: number;

    constructor(private store: Store<{ asd: ContadorState }>) {
        this.store.subscribe(state => {
            this.contadorNieto = state.asd.valorContador;
        });
    }

    reset() {
        this.store.dispatch(ResetAction());
    }
}
