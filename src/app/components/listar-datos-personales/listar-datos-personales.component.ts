import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/DatosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css'],
})
export class ListarDatosPersonalesComponent implements OnInit {
  listDatosPersonales: DatosPersonales[] = [
    {
      identificacion: 1193224863,
      nombre: 'David Santiago',
      apellido: 'Reyes Lasso',
      direccion: 'Casa 11 B Pasto',
      email: 'josecamilreyes9@gmail.com',
      telefono: 3116457949,
    },
    {
      identificacion: 1193224863,
      nombre: 'Camilo Andres',
      apellido: 'Zambrano Ortega',
      direccion: 'Casa 12 A Pasto',
      email: 'zambrano19@gmail.com',
      telefono: 3116777949,
    },
    {
      identificacion: 1193224863,
      nombre: 'Leydi Lucy',
      apellido: 'Lasso Luna',
      direccion: 'Casa 13 B Pasto',
      email: 'luna26@gmail.com',
      telefono: 3156457979,
    },
    {
      identificacion: 1193224863,
      nombre: 'Wilson Esteban',
      apellido: 'Vallejos',
      direccion: 'Casa 15 B Pasto',
      email: 'stebanv@gmail.com',
      telefono: 3116459949,
    },
    {
      identificacion: 1193224863,
      nombre: 'Hernano Andres',
      apellido: 'Valencia Gracia',
      direccion: 'Casa 16 B Pasto',
      email: 'garciahernando2@gmail.com',
      telefono: 3188857949,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
