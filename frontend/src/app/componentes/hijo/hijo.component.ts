import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemediarAction, DuplicarAction, MultiplicarPorFactorAction } from 'src/app/contador/contador.actions';
import { ContadorState } from 'src/app/contador/contador.state';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    contadorHtmlHijo!: number;
    multiplicador: number = 5;

    constructor(private store: Store<{ AppContador: ContadorState }>) {
        this.store.subscribe(state => {
            this.contadorHtmlHijo = state.AppContador.valorContador;
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
