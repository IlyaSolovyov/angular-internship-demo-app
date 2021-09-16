import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable()
export class ConfigStore {
  private _backendUrl = '';

  get backendUrl(): string {
    return this._backendUrl;
  }

  load() {
    this._backendUrl = environment.backendUrl;
  }

  isRequestToApi(requestUrl: string): boolean {
    return requestUrl.includes(this._backendUrl);
  }
}
