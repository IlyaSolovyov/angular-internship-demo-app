import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DoctorService } from 'src/app/doctor/services/doctor/doctor.service';
import { AppRoutes } from 'src/app/shared/constants/app-routes.const';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

import { CreateDoctorRequest } from '../../models/create-doctor-request.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  readonly maxNameLength = 12;

  doctorGroup = new FormGroup({
    firstNameControl: new FormControl('', [Validators.required, Validators.maxLength(this.maxNameLength)]),
    lastNameControl: new FormControl('', [Validators.required, Validators.maxLength(this.maxNameLength)]),
    operationsControl: new FormControl('', [Validators.required]),
  });

  constructor(
    private doctorService: DoctorService,
    private notificationsService: NotificationsService,
    private translateService: TranslateService,
    private router: Router) { }

  onSubmit() {
    if (this.doctorGroup.valid) {
      const firstName: string = this.doctorGroup.get('firstNameControl')?.value;
      const lastName: string = this.doctorGroup.get('lastNameControl')?.value;
      const operations: number = +(this.doctorGroup.get('operationsControl')?.value);

      const request = new CreateDoctorRequest(firstName, lastName, operations);
      this.createDoctor(request);
    }
  }

  private createDoctor(request: CreateDoctorRequest) {
    this.doctorService.createDoctor(request).subscribe(() => {
      const message = this.translateService.instant('Admin.Forms.Doctor.Success');
      const action = this.translateService.instant('General.Common.Close');
 
      this.notificationsService.success(message, action);
  
      this.router.navigate([AppRoutes.doctor]).then();
    },
    () => {
      const message = this.translateService.instant('Generic.Errors.RequestFailed');
      const action = this.translateService.instant('General.Common.Close');
      this.notificationsService.error(message, action);
    });
  }
}
