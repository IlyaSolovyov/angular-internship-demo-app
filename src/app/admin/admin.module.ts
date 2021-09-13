import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    AdminRoutingModule
  ],
})
export class AdminModule { }
