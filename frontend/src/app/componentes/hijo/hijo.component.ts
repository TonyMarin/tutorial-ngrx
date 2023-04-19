import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemediarAction, DuplicarAction, MultiplicarPorFactorAction } from 'src/app/contador/contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    contadorHijo!: number;
    multiplicador: number = 5;

    constructor(private store: Store<{ contador: number }>) {
        this.store.subscribe(state => {
            this.contadorHijo = state.contador;
        });
    }

    duplicar() {
        this.store.dispatch(DuplicarAction());
    }

    demediar() {
        this.store.dispatch(DemediarAction());
    }

    multiplicar() {
        this.store.dispatch(MultiplicarPorFactorAction({payload: this.multiplicador}));
    }
}
