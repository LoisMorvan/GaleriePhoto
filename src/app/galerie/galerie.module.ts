import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalerieRoutingModule } from './galerie-routing.module';
import { GalerieComponent } from './galerie.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    GalerieComponent
  ],
  imports: [
    CommonModule,
    GalerieRoutingModule,
    HttpClientModule,
  ]
})
export class GalerieModule { }
