import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from '../shared/modules/material.module';

import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorRoutingModule } from './doctor-routing.module';

@NgModule({
  declarations: [
    DoctorsListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule.forRoot(),
    DoctorRoutingModule,
  ],
})
export class DoctorModule { }
