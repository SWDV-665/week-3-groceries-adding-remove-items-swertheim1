import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'grocery',
        loadComponent: () =>
          import('../grocery/grocery').then((m) => m.Grocery),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../about/about').then((m) => m.About),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../contact/contact').then((m) => m.Contact),
      },
      {
        path: '',
        redirectTo: '/tabs/grocery',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/grocery',
    pathMatch: 'full',
  },
];
