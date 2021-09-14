import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { DoctorRoutingModule } from './doctor-routing.module';

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
