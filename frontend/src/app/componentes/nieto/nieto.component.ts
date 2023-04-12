import { Component } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    contadorNieto: number;

    constructor() {
        this.contadorNieto = 10;
    }

    reset() {
        this.contadorNieto = 0;
    }
}
