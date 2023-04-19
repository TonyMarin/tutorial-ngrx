import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { ContadorState } from './contador/contador.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    contadorHtmlApp!: number;

    constructor(private store: Store<{ AppContador: ContadorState }>) {
        this.store.subscribe(state => {
            this.contadorHtmlApp = state.AppContador.valorContador;
        });
        // this.store.select('AppContador').subscribe(AppContador => {
        //     this.contadorApp = AppContador.valorContador;;
        // });
    }

    incrementar() {
        this.store.dispatch(IncrementarAction());
    }

    decrementar() {
        this.store.dispatch(DecrementarAction());
    }
}
