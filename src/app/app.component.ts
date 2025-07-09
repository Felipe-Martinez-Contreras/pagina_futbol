import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <nav class="navbar">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
        <a routerLink="/quienes-somos" routerLinkActive="active">Quiénes Somos</a>
        <a routerLink="/categorias" routerLinkActive="active">Categorías</a>
        <a routerLink="/calendario" routerLinkActive="active">Calendario</a>
        <a routerLink="/galeria" routerLinkActive="active">Galería</a>
        <a routerLink="/noticias" routerLinkActive="active">Noticias</a>
        <a routerLink="/inscripciones" routerLinkActive="active">Inscripciones</a>
        <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
      </nav>
    </header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>

    <footer>
      <!-- Pie de página -->
    </footer>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 1rem;
      padding: 1rem;
      background: #f8f9fa;
    }
    .active {
      font-weight: bold;
      color: #0066cc;
    }
    .content {
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  title = 'Mi Aplicación';
}