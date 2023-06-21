import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'galerie', loadChildren: () => import('./galerie/galerie.module').then(m => m.GalerieModule) },
  { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
  { path: '**', redirectTo: 'home' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
