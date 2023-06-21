import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { AddImageComponent } from './components/add-image/add-image.component';


@NgModule({
  declarations: [
    ManagerComponent,
    AddImageComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
