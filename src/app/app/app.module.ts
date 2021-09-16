import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DoctorService } from '../doctor/services/doctor/doctor.service';
import { AdminGuard } from '../shared/guards/admin.guard';
import { AuthorizationGuard } from '../shared/guards/authorization.guard';
import { BackendRequestInterceptor } from '../shared/interceptors/backend-request.interceptor';
import { AuthStore } from '../shared/stores/auth.store';
import { ConfigStore } from '../shared/stores/config.store';

import { AdminModule } from './../admin/admin.module';
import { DoctorModule } from './../doctor/doctor.module';
import { HomeModule } from './../home/home.module';
import { MaterialModule } from './../shared/modules/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function loadConfigStore(configStore: ConfigStore) {
  return () => {
    configStore.load();
  };
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
    DoctorService,
    ConfigStore,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfigStore,
      deps: [
        ConfigStore,
      ],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: BackendRequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
