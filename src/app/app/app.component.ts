import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AppRoutes } from '../shared/constants/app-routes.const';
import { User } from '../shared/models/user';
import { AuthStore } from '../shared/stores/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  homeLink: string = AppRoutes.home;

  doctorsLink: string = AppRoutes.doctor;

  adminLink: string = AppRoutes.editDoctor.replace(':doctorId', '0');

  user: User | null = null;

  constructor(
    private translate: TranslateService,
    private authStore: AuthStore,
    private router: Router,
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.authStore.getAuthUser
      .subscribe((user) => {
        this.user = user;
      });
  }

  signIn() {
    this.authStore.authenticate();
  }

  signInAsAdmin(){
    this.authStore.authenticateAsAdmin();
  }

  signOut() {
    this.authStore.signOut();
    this.router.navigate([AppRoutes.home]).then();
  }
}
