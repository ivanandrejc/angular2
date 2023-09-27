import { Component, Input } from '@angular/core';

interface alumno {
  nombre: string;
  genero: string;
  fechainscripcion: Date;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos: alumno[] = [
    {
      nombre: "ivan",
      genero : 'masculino',
      fechainscripcion: new Date(),
    },
    {
      nombre: 'martin',
      genero: 'masculino',
      fechainscripcion: new Date(),
    },
    {
      nombre: 'Candela',
      genero: 'femenino',
      fechainscripcion: new Date(),
    }
 ]
 
}
