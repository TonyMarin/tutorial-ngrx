import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    contadorNieto!: number;

    constructor(private store: Store<{ contador: number }>) {
        this.store.subscribe(state => {
            this.contadorNieto = state.contador;
        });
    }

    reset() {
        const action = new ResetAction();
        this.store.dispatch(action);
    }
}
