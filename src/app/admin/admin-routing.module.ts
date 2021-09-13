import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
