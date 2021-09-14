import { AppRoutes } from './../shared/constants/app-routes.const';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';

const routes: Routes = [
  {
    path: AppRoutes.doctor,
    component: DoctorsListComponent,
    pathMatch: 'full',
    canActivate: [AuthorizationGuard],
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
