import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../shared/guards/admin.guard';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [AuthorizationGuard, AdminGuard],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
