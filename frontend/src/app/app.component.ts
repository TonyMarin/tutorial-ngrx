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
    contadorHtmlApp$!: Observable<number>;

    constructor(private store: Store<ContadorState>) { }

    ngOnInit(): void {
        this.contadorHtmlApp$ = this.store.pipe(select(selectValorContador));
    }

    incrementar() {
        this.store.dispatch(IncrementarAction());
    }

    decrementar() {
        this.store.dispatch(DecrementarAction());
    }
}
