import { RouterModule, Routes } from '@angular/router';

import {
  AboutComponent,
  HomeComponent,
  FuncionamientoComponent,
  ContactoComponent,
  ResultsComponent


} from './components/index.paginas';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'funcionamiento', component: FuncionamientoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'resultados', component: ResultsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true });
