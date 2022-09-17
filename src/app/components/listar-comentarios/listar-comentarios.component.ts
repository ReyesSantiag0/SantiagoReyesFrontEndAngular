import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css'],
})
export class ListarComentariosComponent implements OnInit {
  listComentarios: Comentario[] = [
    {
      titulo: 'Ciberseguridad',
      autor: 'Santiago Reyes',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario',
    },
    {
      titulo: 'Ingenieria de Software',
      autor: 'Alejandra Valencia',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario',
    },
    {
      titulo: 'Mecatrónica',
      autor: 'Hernando Teran',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario',
    },
    {
      titulo: 'Fundamentos de Programación',
      autor: 'Edison Revelo',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario',
    },
    {
      titulo: 'Algorítmos Genéticos',
      autor: 'Carmen Muñoz ',
      fechaCreacion: new Date(),
      texto: 'Este es un comentario',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
