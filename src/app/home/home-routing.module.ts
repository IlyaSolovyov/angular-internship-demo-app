import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../shared/constants/app-routes.const';
import { HomeScreenComponent } from './home-screen/home-screen.component';

const routes: Routes = [
  {
    path: AppRoutes.home,
    component: HomeScreenComponent,
    pathMatch: 'full',
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
