import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'showcase',
    loadComponent: () => import('./showcase/showcase.component').then(m => m.ShowcaseComponent)
  },
  {
    path: 'definitions',
    loadComponent: () => import('./definitions/definitions.component').then(m => m.DefinitionsComponent)
  }
];
