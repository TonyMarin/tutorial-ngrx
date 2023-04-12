import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    @Input() contadorNieto!: number;
    // @Input() contadorNieto: number = 0;

    constructor() {}

    reset() {
        this.contadorNieto = 0;
    }
}
