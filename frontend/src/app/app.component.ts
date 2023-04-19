import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DecrementarAction, IncrementarAction } from './contador/contador.actions';
import { ContadorState } from './contador/contador.state';
import { Observable } from 'rxjs';
import { selectValorContador } from './contador/contador.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    contadorHtmlApp!: number;
    contadorHtmlApp$!: Observable<number>;

    constructor(private store: Store<{ AppContador: ContadorState }>) { }

    ngOnInit(): void {
        // contadorHtmlApp$ es Observable<number>:
        this.contadorHtmlApp$ = this.store.pipe(select(selectValorContador));
        //contadorHtmlApp es number:
        this.store.subscribe(state => {
            this.contadorHtmlApp = state.AppContador.valorContador;
        });
        // this.store.select('AppContador').subscribe(AppContador => {
        //     this.contadorHtmlApp = AppContador.valorContador;;
        // });
    }

    incrementar() {
        this.store.dispatch(IncrementarAction());
    }

    decrementar() {
        this.store.dispatch(DecrementarAction());
    }
}
