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
    {
        path: 'lessons/two_way_binding',
        loadComponent: () => import('./pages/lessons/two-way-binding-lesson/two-way-binding-lesson').then((m) => m.TwoWayBindingLesson),
    },
    {
        path: 'lessons/conditional_rendering',
        loadComponent: () => import('./pages/lessons/conditional-rendering-lesson/conditional-rendering-lesson').then((m) => m.ConditionalRenderingLesson),
    },
    {
        path: 'lessons/list_rendering',
        loadComponent: () => import('./pages/lessons/list-rendering-lesson/list-rendering-lesson').then((m) => m.ListRenderingLesson),
    },
    {
        path: 'lessons/signals',
        loadComponent: () => import('./pages/lessons/signals-lesson/signals-lesson').then((m) => m.SignalsLesson),
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
  {
    path: 'exercices/event_binding',
    loadComponent: () => import('./pages/exercices/event-binding-exercice/event-binding-exercice').then((m) => m.EventBindingExercice),
  },
  {
    path: 'exercices/conditional_rendering',
    loadComponent: () => import('./pages/exercices/conditional-rendering-exercice/conditional-rendering-exercice').then((m) => m.ConditionalRenderingExercice),
  },
  {
    path: 'exercices/two_way_databinding',
    loadComponent: () => import('./pages/exercices/two-way-databinding-exercice/two-way-databinding-exercice').then((m) => m.TwoWayDatabindingExercice),
  },
  {
    path: 'exercices/list_rendering',
    loadComponent: () => import('./pages/exercices/list-rendering-exercice/list-rendering-exercice').then((m) => m.ListRenderingExercice),
  },
  {
    path: 'exercices/dynamic_styling',
    loadComponent: () => import('./pages/exercices/dynamic-styling-exercice/dynamic-styling-exercice').then((m) => m.DynamicStylingExercice),
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
    {
        path: 'corrections/event_binding',
        loadComponent: () => import('./pages/corrections/event-binding-correction/event-binding').then((m) => m.EventBinding),
    },
    {
        path: 'corrections/conditional_rendering',
        loadComponent: () => import('./pages/corrections/conditional-rendering-correction/conditional-rendering').then((m) => m.ConditionalRendering),
    },

  //! ---------- Le système page Not Found ---------------------------------------------------------------------
  // Dans Angular il faut placer à la fin le path:'**'
  // ! check la doc si ya meilleure manière de faire ou plus simple ? aller explorer analog ?
    {
      path:'**',
      loadComponent:()=>import('./pages/not-found/not-found').then(m=>m.NotFound)
    }
];