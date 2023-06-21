import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerieRoutingModule } from './galerie-routing.module';
import { GalerieComponent } from './galerie.component';


@NgModule({
  declarations: [
    GalerieComponent
  ],
  imports: [
    CommonModule,
    GalerieRoutingModule
  ]
})
export class GalerieModule { }
