import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'end',
  };

  constructor(private snackBar: MatSnackBar) { }

  success(message: string, action: string) {
    this.config.panelClass = ['snack-bar-success'];
    this.snackBar.open(message, action, this.config);
  }

  warning(message: string, action: string) {
    this.config.panelClass = ['snack-bar-warning'];
    this.snackBar.open(message, action, this.config);
  }

  error(message: string, action: string) {
    this.config.panelClass = ['snack-bar-error'];
    this.snackBar.open(message, action, this.config);
  }
}
