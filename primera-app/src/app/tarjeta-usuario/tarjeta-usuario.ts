import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-tarjeta-usuario',
  styleUrl: './tarjeta-usuario.css',
  templateUrl: './tarjeta-usuario.html',
})
export class TarjetaUsuario {
  nombre = input.required<String>();
  profesion = input.required<String>();
  avatarUrl = input.required<String>();

  enLinea = true;

  cambiarEstado() {
    this.enLinea = !this.enLinea;
  }
}
