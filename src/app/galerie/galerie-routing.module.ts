import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalerieComponent } from './galerie.component';
import { imagesResolver } from '../core/resolvers/images.resolver';

const routes: Routes = [
  { path: '', component: GalerieComponent, resolve: { images: imagesResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerieRoutingModule { }
