import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()), // Habilita input binding para parámetros de ruta
    provideHttpClient(), // Si necesitas hacer peticiones HTTP
    provideAnimations() // Si usas Angular Material o animaciones
  ]
};