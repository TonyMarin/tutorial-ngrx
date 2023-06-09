import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { NietoComponent } from './componentes/nieto/nieto.component';

import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ContadorService } from './contador/contador.service';
import { EffectsModule } from '@ngrx/effects';
import { ContadorEffects } from './contador/contador.effects';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ AppContador: contadorReducer }),
    FormsModule,
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: !isDevMode() // Restrict extension to log-only mode
    }),
    HttpClientModule,
    EffectsModule.forRoot([ContadorEffects])
  ],
  providers: [ContadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
