import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { NietoComponent } from './componentes/nieto/nieto.component';

import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ contador: contadorReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
