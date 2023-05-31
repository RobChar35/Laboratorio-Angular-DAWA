import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { RespuestaComponent } from './respuesta/respuesta.component';

const routes: Routes = [
  {path: '', component: FormularioComponent},
  {path: 'datos', component: RespuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
