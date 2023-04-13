import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemediarAction, DuplicarAction, MultiplicarPorFactorAction } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    contadorHijo!: number;
    multiplicador: number = 0;

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

    multiplicar() {
        const accion = new MultiplicarPorFactorAction(this.multiplicador);
        this.store.dispatch(accion);
    }
}
