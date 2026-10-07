import { Component,input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-ikastola',
  styleUrl: './ikastola.css',
  templateUrl: './ikastola.html',
})

export class Ikastola {
  materia = input.required<String>();
  profesor = input.required<String>();
  avatarUrl = input.required<String>();
  aula = input.required<String>();
  numAlumnos = input.required<String>();

  enLinea = true;

  cambiarEstado() {
    this.enLinea = !this.enLinea;
  }

}
