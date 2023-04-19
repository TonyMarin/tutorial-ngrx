import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { ContadorState } from './contador/contador.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    contador!: number;

    constructor(private store: Store<{ asd: ContadorState }>) {
        this.store.subscribe(state => {
            this.contador = state.asd.valorContador;
        });
        // this.store.select('asd').subscribe(asd => {
        //     this.contador = asd.valorContador;;
        // });
    }

    incrementar() {
        this.store.dispatch(IncrementarAction());
    }

    decrementar() {
        this.store.dispatch(DecrementarAction());
    }
}
