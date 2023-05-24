import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { ListaTareaComponent } from './lista-tarea/lista-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ContadorComponent,
    ListaTareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
