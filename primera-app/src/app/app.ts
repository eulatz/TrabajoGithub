import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TarjetaUsuario } from './tarjeta-usuario/tarjeta-usuario';
import { Ikastola } from './ikastola/ikastola';

@Component({
  imports: [TarjetaUsuario, Ikastola],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('primera-app');
}
