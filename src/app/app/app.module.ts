import { DoctorModule } from './../doctor/doctor.module';
import { HomeModule } from './../home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from './../shared/modules/material.module';
import { AdminModule } from './../admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { AdminGuard } from '../shared/guards/admin.guard';
import { AuthStore } from '../shared/stores/auth.store';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
    MaterialModule,
    AppRoutingModule,
    AdminModule,
    HomeModule,
    DoctorModule,
  ],
  providers: [
    AuthorizationGuard,
    AdminGuard,
    AuthStore,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
