import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DemediarAction, DuplicarAction, MultiplicarPorFactorAction } from 'src/app/contador/contador.actions';
import { selectValorContador } from 'src/app/contador/contador.selector';
import { ContadorState } from 'src/app/contador/contador.state';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit {
    contadorHtmlHijo$!: Observable<number>;
    multiplicador: number = 5;

    constructor(private store: Store<ContadorState>) { }

    ngOnInit(): void {
        this.contadorHtmlHijo$ = this.store.pipe(select(selectValorContador));
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
