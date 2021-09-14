import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    AdminRoutingModule,
  ],
})
export class AdminModule { }
