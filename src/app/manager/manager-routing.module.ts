import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { AddImageComponent } from './components/add-image/add-image.component';

const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'add', component: AddImageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
