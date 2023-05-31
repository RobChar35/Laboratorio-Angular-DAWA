import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { FormularioComponent } from './formulario/formulario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    RespuestaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
