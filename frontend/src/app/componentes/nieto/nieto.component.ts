import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html'
})
export class NietoComponent {
    @Input() contadorNieto!: number;
    // @Input() contadorNieto: number = 0;
    @Output() contadorCambio = new EventEmitter<number>();

    constructor() { }

    reset() {
        this.contadorNieto = 0;
        this.contadorCambio.emit(0);
    }
}
