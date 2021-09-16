import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutes } from '../shared/constants/app-routes.const';
import { AdminGuard } from '../shared/guards/admin.guard';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';

import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: AppRoutes.editDoctor,
    component: AdminComponent,
    pathMatch: 'full',
    canActivate: [AuthorizationGuard, AdminGuard],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
