import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Doctor } from 'src/app/doctor/models/doctor.model';
import { DoctorService } from 'src/app/doctor/services/doctor/doctor.service';
import { AppRoutes } from 'src/app/shared/constants/app-routes.const';
import { NotificationsService } from 'src/app/shared/services/notifications.service';

import { CreateDoctorRequest } from '../../models/create-doctor-request.model';
import { UpdateDoctorRequest } from '../../models/update-doctor-request.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  readonly maxNameLength = 12;

  doctorGroup: FormGroup;

  existingDoctor: Doctor;

  isEdit: boolean = false;

  constructor(
    private doctorService: DoctorService,
    private notificationsService: NotificationsService,
    private translateService: TranslateService,
    private router: Router) { 
    const { state } = this.router.getCurrentNavigation()!.extras;
    
    this.existingDoctor = state?.doctor;
    this.isEdit = !!this.existingDoctor;

    this.doctorGroup = new FormGroup({
      firstNameControl: new FormControl(this.existingDoctor?.firstName || '', [Validators.required, Validators.maxLength(this.maxNameLength)]),
      lastNameControl: new FormControl(this.existingDoctor?.lastName || '', [Validators.required, Validators.maxLength(this.maxNameLength)]),
      operationsControl: new FormControl(this.existingDoctor?.successfulOperationsNumber || '', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.doctorGroup.valid) {
      const firstName: string = this.doctorGroup.get('firstNameControl')?.value;
      const lastName: string = this.doctorGroup.get('lastNameControl')?.value;
      const operations: number = +(this.doctorGroup.get('operationsControl')?.value);

      if (this.isEdit){
        const request = new UpdateDoctorRequest(
          this.existingDoctor.id,
          firstName, 
          lastName, 
          operations);

        this.updateDoctor(request);
        return;
      }
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
    });
  }

  private updateDoctor(request: UpdateDoctorRequest) {
    this.doctorService.updateDoctor(request).subscribe(() => {
      const message = this.translateService.instant('Admin.Forms.Doctor.UpdateSuccess');
      const action = this.translateService.instant('General.Common.Close');
 
      this.notificationsService.success(message, action);
  
      this.router.navigate([AppRoutes.doctor]).then();
    });
  }
}
