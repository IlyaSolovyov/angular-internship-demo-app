import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateDoctorRequest } from 'src/app/admin/models/create-doctor-request.model';

import { Doctor } from '../../models/doctor.model';

const stubDoctors: Doctor[] = [
  new Doctor(1, 'Doctor', 'One', 234),
  new Doctor(2, 'Doctor', 'Two', 156),
  new Doctor(3, 'Doctor', 'Three', 123),
  new Doctor(4, 'Medic', 'One', 650),
  new Doctor(5, 'Medic', 'Two', 45),
  new Doctor(6, 'Healer', 'One', 760),
  new Doctor(7, 'Healer', 'Two', 134),
  new Doctor(8, 'Healer', 'Three', 123),
  new Doctor(9, 'Healer', 'Four', 430),
  new Doctor(10, 'Physician', 'One', 150),
];

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private doctorsUrl = 'api/doctors';  // URL to web api
 
  constructor(
    private http: HttpClient,
  ) { }

  getDoctors(): Observable<Doctor[]> {
    //return this.http.get<Doctor[]>(this.doctorsUrl);
    return of(stubDoctors);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createDoctor(request: CreateDoctorRequest): Observable<Doctor | null> {
    //return this.http.post("someUrl", facilityRoute);
    return of(null);
  }
}