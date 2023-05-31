import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObtenerDatosService {

  constructor() { }

  private datosForm: any

  setDatosForm(datos: any) {
    this.datosForm = datos
  }

  getDatosForm() {
    return this.datosForm
  }
}
