import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { NotificationsService } from '../services/notifications.service';
import { AuthStore } from '../stores/auth.store';
import { ConfigStore } from '../stores/config.store';

@Injectable()
export class BackendRequestInterceptor implements HttpInterceptor {
  constructor(
    private configStore: ConfigStore,
    public authStore: AuthStore,
    private notificationsService: NotificationsService,
    private translateService: TranslateService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authStore.getAccessToken();
    if (this.configStore.isRequestToApi(request.url) && token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(retry(1), catchError((error: HttpErrorResponse) => {
      const errorMessage = this.translateService.instant('General.Errors.RequestFailed');
      const errorAction = this.translateService.instant('General.Common.Close');

      this.notificationsService.error(errorMessage, errorAction);

      //some other error handling
      return throwError(error);
    }));
  }
}
