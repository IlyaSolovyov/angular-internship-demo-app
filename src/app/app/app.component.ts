import { Component } from '@angular/core';
import { AppRoutes } from '../shared/constants/app-routes.const';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  homeLink: string = AppRoutes.home;
  doctorsLink: string = AppRoutes.doctor;
  adminLink: string = AppRoutes.admin;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
}
}
