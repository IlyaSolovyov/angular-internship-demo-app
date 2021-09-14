import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';

@NgModule({
  declarations: [
    DoctorsListComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    DoctorRoutingModule,
  ],
})
export class DoctorModule { }
