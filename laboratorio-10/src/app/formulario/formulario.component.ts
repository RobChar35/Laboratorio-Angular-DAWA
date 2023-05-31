import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ObtenerDatosService } from '../obtener-datos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = ""
  email: string = ""

  constructor(private router: Router, private route: ObtenerDatosService) {}

  onSubmit() {
    console.log('Formulario enviado')
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Email: ${this.email}`)

    // Al momento de enviar los datos, se mandaran estos al metodo de "setDatosForm" del service "obtener-datos"
    // Esto es para que los datos se puedan mostrar en otras rutas 
    this.route.setDatosForm({
      nombre: this.nombre,
      email: this.email
    })

    this.router.navigate(['datos'])
  }

  // Esta funcion sirve para validar si hay datos dentro de los campos del formulario.
  // En este caso, no existe algun tipo de filtro mas que el de si los campos tienen o no datos.
  validarFormulario(formulario: NgForm) {
    if (formulario.valid) {
      formulario.form.controls['nombre'].setErrors(null);
      formulario.form.controls['email'].setErrors(null);
    } else {
      formulario.form.controls['nombre'].markAsTouched();
      formulario.form.controls['email'].markAsTouched();
    }
  }

  // Esta funcion sirve para abrir una ventana de confirmacion antes de enviar los datos
  confirmarEnvio() {
    if (window.confirm('¿Quieres enviar esos datos?')) {
      this.onSubmit();
    }
  }
}
