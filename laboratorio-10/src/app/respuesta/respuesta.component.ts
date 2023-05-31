import { Component, OnInit } from '@angular/core';
import { ObtenerDatosService } from '../obtener-datos.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  
  datosObtenidos: any

  constructor(private route: ObtenerDatosService) { }

  ngOnInit() {
    this.datosObtenidos = this.route.getDatosForm()
  }
}
