import { Routes } from '@angular/router';
// Import de la classe  Route classique pour définir les routes de l'application
import { About } from './pages/about/about';
export const routes: Routes = [
  // Route pour la page À propos (classique)
  { path: 'about', component: About },
  // Route par défaut pour rediriger vers la page Home
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Route en Lazy loading pour la page Home (module)
  // La route sera chargée uniquement lorsque l'utilisateur naviguera vers cette route
  {
    path: 'home',
    // Lazy Loading du composant
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  //Lessons
    {
      path: 'lessons/text_interpolation',
      loadComponent: () => import('./pages/lessons/text-interpolation-lesson/text-interpolation-lesson').then((m) => m.TextInterpolationLesson),
    },
    {
        path: 'lessons/attributes_binding',
        loadComponent: () => import('./pages/lessons/attributes-binding-lesson/attributes-binding-lesson').then((m) => m.AttributesBindingLesson),
    },
    {
        path: 'lessons/event_binding',
        loadComponent: () => import('./pages/lessons/event-binding-lesson/event-binding-lesson').then((m) => m.EventBindingLesson),
    },

  //Exercices
  {
    path: 'exercices/text_interpolation',
    loadComponent: () => import('./pages/exercices/text-interpolation-exercice/text-interpolation-exercice').then((m) => m.TextInterpolationExercice),
  },
  {
    path: 'exercices/property_binding',
    loadComponent: () => import('./pages/exercices/property-binding-exercice/property-binding-exercice').then((m) => m.PropertyBindingExercice),
  },

  //Corrections
    {
        path: 'corrections/text_interpolation',
        loadComponent: () => import('./pages/corrections/text-interpolation-correction/text-interpolation-exercice').then((m) => m.TextInterpolationExercice),
    },
    {
        path: 'corrections/attributes_binding',
        loadComponent: () => import('./pages/corrections/attributes-binding-correction/attributes-binding-correction').then((m) => m.AttributesBindingCorrection),
    },
];