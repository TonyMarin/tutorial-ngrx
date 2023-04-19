import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ResetAction } from 'src/app/contador/contador.actions';
import { selectValorContador } from 'src/app/contador/contador.selector';
import { ContadorState } from 'src/app/contador/contador.state';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent  implements OnInit {
    contadorHtmlNieto$!: Observable<number>;

    constructor(private store: Store<ContadorState>) { }

    ngOnInit(): void {
        this.contadorHtmlNieto$ = this.store.pipe(select(selectValorContador));
    }

    reset() {
        this.store.dispatch(ResetAction());
    }
}
