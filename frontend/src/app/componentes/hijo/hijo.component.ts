import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    @Input() contadorHijo!: number;
    // @Input() contadorHijo: number = 0;
    @Output() contadorCambio = new EventEmitter<number>();

    constructor() { }

    duplicar() {
        this.contadorHijo*=2;
        this.contadorCambio.emit(this.contadorHijo);
    }

    demediar() {
        this.contadorHijo/=2;
        this.contadorCambio.emit(this.contadorHijo);
    }

    resetNieto(nuevoContador: number) {
        this.contadorHijo = nuevoContador;
        this.contadorCambio.emit(this.contadorHijo);
    }
}
