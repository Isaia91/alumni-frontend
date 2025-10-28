import { Routes } from '@angular/router';
import { AlumniListComponent } from './features/alumni/alumni-list/alumni-list';
import { AlumniDetailComponent } from './features/alumni/alumni-detail/alumni-detail';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'alumni' },
  { path: 'alumni', component: AlumniListComponent },
  { path: 'alumni/:id', component: AlumniDetailComponent },
  { path: 'ar', loadComponent: () => import('./features/alumni/alumni-ar/alumni-ar').then(m => m.AlumniAr) },
];
