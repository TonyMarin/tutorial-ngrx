import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    @Input() contadorHijo!: number;
    // @Input() contadorHijo: number = 0;

    constructor() { }

    duplicar() {
        this.contadorHijo*=2;
    }

    demediar() {
        this.contadorHijo/=2;
    }
}
