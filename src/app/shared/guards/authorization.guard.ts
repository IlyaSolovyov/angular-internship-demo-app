import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppRoutes } from '../constants/app-routes.const';
import { AuthStore } from '../stores/auth.store';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private router: Router,
    private authStore: AuthStore
  ) { }

  canActivate(): Observable<boolean> | boolean {
    console.log("Running authorization guard.");
    
    return this.authStore.getAuthUser.pipe(map((user) => {
      if (user) {
        console.log("User is authorized; navigation allowed.")
        return true;
      }

      console.log("User is not authorized; redirecting to home screen.")
      this.router.navigate([AppRoutes.home]).then();

      return false;
    }));
  }
}
