import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { 
    path: '', 
    title: 'Inicio',  // Añade títulos para mejor SEO
    component: InicioComponent 
  },
  { 
    path: 'quienes-somos', 
    title: 'Quiénes Somos',
    component: QuienesSomosComponent 
  },
  { 
    path: 'categorias', 
    title: 'Categorías',
    component: CategoriasComponent 
  },
  { 
    path: 'calendario', 
    title: 'Calendario',
    component: CalendarioComponent 
  },
  { 
    path: 'galeria', 
    title: 'Galería',
    component: GaleriaComponent 
  },
  { 
    path: 'noticias', 
    title: 'Noticias',
    component: NoticiasComponent 
  },
  { 
    path: 'inscripciones', 
    title: 'Inscripciones',
    component: InscripcionesComponent 
  },
  { 
    path: 'contacto', 
    title: 'Contacto',
    component: ContactoComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];