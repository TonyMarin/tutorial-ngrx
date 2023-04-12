import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemediarAction, DuplicarAction } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    contadorHijo!: number;

    constructor(private store: Store<{ contador: number }>) {
        this.store.subscribe(state => {
            this.contadorHijo = state.contador;
        });
    }

    duplicar() {
        const action = new DuplicarAction();
        this.store.dispatch(action);
    }

    demediar() {
        const action = new DemediarAction();
        this.store.dispatch(action);
    }
}
