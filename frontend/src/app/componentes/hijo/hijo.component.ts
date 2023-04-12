import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html'
})
export class HijoComponent {
    contador: number;

    constructor() {
        this.contador = 10;
    }

    duplicar() {
        this.contador*=2;
    }

    demediar() {
        this.contador/=2;
    }
}
