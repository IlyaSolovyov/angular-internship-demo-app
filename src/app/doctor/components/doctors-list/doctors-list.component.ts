import { Component, OnInit } from '@angular/core';

import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor/doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss'],
})
export class DoctorsListComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService){}

  ngOnInit(){
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
      console.log('this.doctors', this.doctors);
    });
  }
}
