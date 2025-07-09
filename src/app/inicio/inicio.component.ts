import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // <-- Esta es la importación clave

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive,RouterOutlet],
  template: `
    <h1>Bienvenido a nuestra aplicación</h1>
    <nav>
      <a routerLink="/quienes-somos" routerLinkActive="active">Quiénes Somos</a>
      <a routerLink="/categorias" routerLinkActive="active">Categorías</a>
      <!-- otros enlaces -->
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .active {
      font-weight: bold;
      color: #0066cc;
    }
  `]
})
export class InicioComponent {
  // Lógica del componente aquí
}