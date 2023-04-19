import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    contador!: number;

    constructor(private store: Store<{ contador: number }>) {
        this.store.subscribe(state => {
            this.contador = state.contador;
        });
        // this.store.select('contador').subscribe(contador => {
        //     console.log(contador);
        //     this.contador = contador;
        // });
    }

    incrementar() {
        this.store.dispatch(IncrementarAction());
    }

    decrementar() {
        this.store.dispatch(DecrementarAction());
    }
}
